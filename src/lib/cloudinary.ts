/**
 * Cloudinary Image Delivery & Optimization Utility
 * Automatically injects `f_auto,q_auto` and optional dimensions into Cloudinary URLs
 * or constructs optimized URLs from Cloudinary public_ids.
 */

const DEFAULT_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'zynthax';

interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'limit' | 'scale' | 'thumb';
  quality?: string | number;
  format?: string;
  aspectRatio?: string;
}

export function getOptimizedCloudinaryUrl(
  imageSource: string,
  options: CloudinaryTransformOptions = {}
): string {
  if (!imageSource) return '';

  const { width, height, crop = 'fill', quality = 'auto', format = 'auto', aspectRatio } = options;

  // Build transformation segment
  const transforms: string[] = [`f_${format}`, `q_${quality}`];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (crop && (width || height)) transforms.push(`c_${crop}`);
  if (aspectRatio) transforms.push(`ar_${aspectRatio}`);

  const transformString = transforms.join(',');

  // Case 1: Already a full Cloudinary URL
  if (imageSource.includes('res.cloudinary.com')) {
    // If it already has /upload/, inject the transforms after /upload/
    if (imageSource.includes('/upload/')) {
      // Check if f_auto or q_auto is already in the segment
      const uploadIndex = imageSource.indexOf('/upload/');
      const prefix = imageSource.substring(0, uploadIndex + '/upload/'.length);
      const rest = imageSource.substring(uploadIndex + '/upload/'.length);

      // If already contains our transformations, return it
      if (rest.startsWith('f_auto,q_auto')) {
        return imageSource;
      }

      return `${prefix}${transformString}/${rest}`;
    }
    return imageSource;
  }

  // Case 2: Standard HTTP/HTTPS image not hosted on Cloudinary (return directly or fetch)
  if (imageSource.startsWith('http://') || imageSource.startsWith('https://')) {
    return imageSource;
  }

  // Case 3: Provided as Cloudinary public_id
  const cleanPublicId = imageSource.replace(/^\/+/, '');
  return `https://res.cloudinary.com/${DEFAULT_CLOUD_NAME}/image/upload/${transformString}/${cleanPublicId}`;
}

export default getOptimizedCloudinaryUrl;

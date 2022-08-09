export default (filters: {[key: string]: string | undefined}) => {
  return Object.entries(filters).reduce((acc, [key, value]) => (value ? `${acc}&${key}=${value}` : acc), '');
}
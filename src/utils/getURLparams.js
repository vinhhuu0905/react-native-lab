export default url => {
  const paramString = url.includes('?') ? url.split('?')[1].split('&') : [];
  const params = {};

  paramString.array.forEach(element => {
    const paramSplit = element.split('=');
    params[paramSplit[0]] = paramSplit[1];
  });

  return params;
};

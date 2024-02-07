const convertImageToBuffer = async (imageData) => {
  try {
    // Convert base64-encoded string to Buffer
    const imageBuffer = Buffer.from(imageData, 'base64');

    return imageBuffer;
  } catch (error) {
    console.error('Error converting image to buffer:', error);
    throw error;
  }
};

  const convertBufferToImage = (buffer) => {
    return `data:image/jpeg;base64,${buffer.toString('base64')}`;
  };
  
  
  export{convertImageToBuffer,convertBufferToImage};
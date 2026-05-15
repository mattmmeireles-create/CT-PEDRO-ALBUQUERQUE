const fs = require('fs');
const axios = require('axios');

async function getInstagramStories() {
  try {
    const username = "ctpedroalbuquerque";
    
    // Usando uma API gratuita de espelho do Instagram (ex: IgAnony ou instanavigation)
    // Se preferir algo oficial/estável, use o RapidAPI (Instagram Data Provider)
    const response = await axios.get(`https://api.storiesig.info/api/profile/${username}`);
    
    if (response.data && response.data.stories && response.data.stories.length > 0) {
      // Pega a imagem do primeiro story ativo
      const latestStoryImage = response.data.stories[0].image_versions2.candidates[0].url;
      
      const cacheData = {
        storyImage: latestStoryImage,
        feedImages: [] // Você pode alimentar o feed aqui depois se quiser
      };

      // Salva o resultado na pasta public do seu projeto React
      fs.writeFileSync('./public/instagram-cache.json', JSON.stringify(cacheData, null, 2));
      console.log("✅ Imagem do Story atualizada com sucesso!");
    } else {
      console.log("ℹ️ Nenhum story ativo nas últimas 24 horas.");
      // Limpa o cache se não houver story ativo
      fs.writeFileSync('./public/instagram-cache.json', JSON.stringify({ storyImage: null, feedImages: [] }));
    }
  } catch (error) {
    console.error("❌ Erro ao buscar dados do Instagram:", error.message);
  }
}

getInstagramStories();

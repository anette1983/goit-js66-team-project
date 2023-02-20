import spriteUrl from '/images/icon-sprites.svg';

function createBaseMarcup(arr) {
  const marcup = arrHandler(arr)
    .map(article => {
      if (!article) {
        return;
      }
      const { section, title, description, url, date, img, imgCaption } =
        article;

      return `<li class="article">
     <div class="article_img_wrapper">
       <p class="already-read">Already read</p>
       <p class="article_category">${section}</p>
       <img class="article_img" src="${
         img[img.length - 1].url
       }" alt="${imgCaption}" width="395" height="395">
       <div class="article_flag">
       <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>
         <svg width="16" height="16">
         <use href="${spriteUrl}#heart_contur" width="16" height="16"></use>
        </svg>
         </button>
         <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>
         <svg width="16" height="16">
         <use href="${spriteUrl}#heart_fill" width="16" height="16"></use>
       </svg>
          </button>
         </div>
     </div>
     <div class="article_text_wrapper">
       <h2 class="article_title">${title}</h2>
       <p class="article_text">${description}</p>
     </div>
     <div class="article_info_wrapper">
       <p class="article_date">${date}</p>
       <a href="${url}" class="read-more">Read more</a>
     </div>
     </li>`;
    })
    .join('');

  return marcup;
}

function arrHandler(arr) {
  try {
    const objArr = arr.map(el => {
      if (el.media.length === 0) {
        return;
      }
      return {
        section: el.section_name || el.section,
        title: el.title || el.headline.main,
        description: el.abstract,
        url: el.web_url || el.url,
        date: el.pub_date || el.created_date || el.published_date,
        img: el.media[0]['media-metadata'],
        imgCaption: el.media[0].caption,
      };
    });
    return objArr;
  } catch (error) {
    console.error(error);
  }
}

export { arrHandler, createBaseMarcup };

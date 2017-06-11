const youtubeEmbedUrl = ($sce) => {
    return (url) => {
      return $sce.trustAsResourceUrl(`${url}?rel=0&showinfo=0`);
    };
};

youtubeEmbedUrl.$inject = ['$sce'];
export default youtubeEmbedUrl;
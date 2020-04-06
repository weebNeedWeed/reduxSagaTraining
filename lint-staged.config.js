const config = {
	"**/*.{css,js}?(x)": (filenames) => {
    const mapper = filenames.map(filename => {
      return [
        `npx run lint ${filename}`,
        `npx run format ${filename}`
      ];
    });
    return mapper;
  }
};

console.log(111);

module.exports = config;

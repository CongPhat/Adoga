const pagination = async (models, pageSize, pageNumber, dataQuery) => {
  console.log(dataQuery);
  const dataFind = await models
    .find(dataQuery)
    .limit(parseInt(pageSize))
    .skip(
      parseInt(pageNumber) == 1 ? 0 : parseInt(pageNumber) * parseInt(pageSize)
    );
  return dataFind;
};

module.exports = {
  pagination,
};

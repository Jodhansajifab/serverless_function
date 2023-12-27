// Changes updated
module.exports.handler = async (event) => {
  const { firstName, secondName } = JSON.parse(event.body);

  const fullName = `${firstName} ${secondName}`;

  return {
    statusCode: 200,
    body: JSON.stringify({ fullName }),
  };
};

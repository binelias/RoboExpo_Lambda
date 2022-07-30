'use strict';

const emojis = [
  '😄','😃','😀','😊','😉','😍','🔶','🔷', '🚀'
];

module.exports.rank = async (event, context, callback) => {
  const rank = event.queryStringParameters.rank;//grab from endpoint like rank?rank=4
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];
  const response ={
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(
      {
        message: 'Rank Generated!',
        input: rankEmoji,
      }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

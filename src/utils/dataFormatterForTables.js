export default function(data) {
  if (data) {
    return data.map(item => ({ key: item._id, ...item }));
  } else {
    return data;
  }
}

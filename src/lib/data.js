const data = [
  {
    id: '1',
    name: 'next.js',
  },
  {
    id: '2',
    name: 'react',
  },
];

export async function getData() {
  const result = await Promise.resolve(data);

  return result;
}

export async function getItem(id) {
  const item = await Promise.resolve(data.find(i => i.id === id));

  return item;
}

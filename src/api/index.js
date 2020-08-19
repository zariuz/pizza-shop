import { db, auth } from '../firebase';

export function getPizzas() {
  return db
    .collection('pizzas')
    .get()
    .then((snapshot) => {
      const pizzas = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return pizzas;
    });
}

export function sortPizzas() {
  return db
    .collection('pizzas')
    .where('id', '==', 0)
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    });
}

function result() {
  return sortPizzas().then((items) => {
    console.log(items);
    return items;
  });
}

import { db, auth } from '../firebase';

export function getPizzas(sortBy, category) {
  if (category !== null) {
    return db
      .collection('pizzas')
      .where('category', '==', category)
      .get()
      .then((snapshot) => {
        const pizzas = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return pizzas;
      });
  } else {
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
}

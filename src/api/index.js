import { db, auth } from '../firebase';

export function getPizzas(category, sortBy = 'rating') {
  if (category !== null) {
    return db
      .collection('pizzas')
      .where('category', '==', category)
      .orderBy(sortBy)
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
      .orderBy(sortBy)
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

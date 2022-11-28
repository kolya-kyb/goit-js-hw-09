import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  let currentDelay = Number(delay.value);

  for (let position = 1; position <= Number(amount.value); position += 1) {
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(` Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += Number(step.value);
  }
});

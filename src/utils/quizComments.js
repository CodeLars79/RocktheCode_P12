export function getResultComment(score) {
  if (score <= 2) {
    return 'Looks like you are just getting started with Gaudí. Time to explore more!'
  } else if (score <= 5) {
    return 'Nice job! You have a solid understanding of Gaudís work.'
  } else {
    return 'Amazing! You are a true Gaudí expert!'
  }
}

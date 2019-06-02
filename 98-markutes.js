const m = [100, 81, 75, 55, 39];

function findBest(sum) {
  let best = {
    array: [],
    diff: -1
  };

  function find(prev, sum, sumLeft) {
    m.forEach(n => {
      let newArray = [...prev, n];

      if (sumLeft - n > 0) {
        find(newArray, sum, sumLeft - n);
      } else {
        let diff = n - sumLeft;

        if (best.diff === -1 || best.diff > diff) {
          best = {
            array: newArray,
            diff: diff
          };
        }
      }
    });
  }

  find([], sum, sum);
  console.log(best);
}

function findBest2(sum) {
  function find(prev, sum, sumLeft, bestArr, bestDiff) {
    let newBest = [...bestArr];
    let newDiff = bestDiff;

    for (let i = 0; i <= m.length; i++) {
      const n = m[i];

      let newArray = [...prev, n];

      if (sumLeft - n > 0) {
        let res = find(newArray, sum, sumLeft - n, newBest, newDiff);
        newBest = res.arr;
        newDiff = res.diff;
      } else {
        let diff = n - sumLeft;

        if (newDiff === -1 || newDiff > diff) {
          newDiff = diff;
          newBest = newArray;
        }
      }

      if (newDiff <= 5) {
        break;
      }
    }

    return {
      arr: newBest,
      diff: newDiff
    }
  }

  const finalRes = find([], sum, sum, [], -1);
  console.log(finalRes);
}

findBest(198);
findBest(209);

findBest2(198);
findBest2(209);

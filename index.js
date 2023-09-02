function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Fungsi mengisi array dengan nilai acak
  function fillArrayWithRandomValues(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(getRandomInt(1, 50));
    }
    return array;
  }
  
  // membagi array menjadi dua array (genap dan ganjil)
  function splitArrayIntoEvenAndOdd(array) {
    const evenArray = [];
    const oddArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(array[i]);
      } else {
        oddArray.push(array[i]);
      }
    }
  
    return { evenArray, oddArray };
  }
  
  //menghitung min dari array
  function calculateMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
  
  //menghitung max dari array
  function calculateMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  
  //menghitung total dari array
  function calculateTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  //menghitung rata-rata dari array
  function calculateAverage(array) {
    const total = calculateTotal(array);
    return total / array.length;
  }
  
  //array dengan 100 nilai acak
  const randomArray = fillArrayWithRandomValues(100);
  
  // Memisahkan array, array genap dan ganjil
  const { evenArray, oddArray } = splitArrayIntoEvenAndOdd(randomArray);
  
  // Menghitungmasing" array
  const evenArrayMin = calculateMin(evenArray);
  const evenArrayMax = calculateMax(evenArray);
  const evenArrayTotal = calculateTotal(evenArray);
  const evenArrayAverage = calculateAverage(evenArray);
  
  const oddArrayMin = calculateMin(oddArray);
  const oddArrayMax = calculateMax(oddArray);
  const oddArrayTotal = calculateTotal(oddArray);
  const oddArrayAverage = calculateAverage(oddArray);
  
  // Menampilkan hasil
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArray);
  console.log("Array ganjil dengan jumlah index 50:", oddArray);
  console.log("Statistik Array Genap (Min, Max, Total, Rata-rata):", evenArrayMin, evenArrayMax, evenArrayTotal, evenArrayAverage);
  console.log("Statistik Array Ganjil (Min, Max, Total, Rata-rata):", oddArrayMin, oddArrayMax, oddArrayTotal, oddArrayAverage);
  
  // Membandingkan nilai min, max, total, dan rata-rata
  if (evenArrayMin > oddArrayMin) {
    console.log("Min lebih besar pada array genap");
  } else if (evenArrayMin < oddArrayMin) {
    console.log("Min lebih besar pada array ganjil");
  } else {
    console.log("Min memiliki nilai sama antara array genap dan ganjil");
  }
  
  if (evenArrayMax > oddArrayMax) {
    console.log("Max lebih besar pada array genap");
  } else if (evenArrayMax < oddArrayMax) {
    console.log("Max lebih besar pada array ganjil");
  } else {
    console.log("Max memiliki nilai sama antara array genap dan ganjil");
  }
  
  if (evenArrayTotal === oddArrayTotal) {
    console.log("Total memiliki nilai yang sama antara array genap dan ganjil");
  } else {
    console.log("Total memiliki nilai yang berbeda antara array genap dan ganjil");
  }
  
  if (evenArrayAverage > oddArrayAverage) {
    console.log("Rata-rata lebih besar pada array genap");
  } else if (evenArrayAverage < oddArrayAverage) {
    console.log("Rata-rata lebih besar pada array ganjil");
  } else {
    console.log("Rata-rata memiliki nilai yang sama antara array genap dan ganjil");
  }
  

// ordenando.js

// Função para trocar os array de duas posições em um vetor
const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// Função para embaralhar os elementos de um vetor
const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const pos1 = Math.floor(Math.random() * array.length);
        const pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

// Função de ordenação Bubble Sort
const bubble_sort = (array) => {
    // Implementação do algoritmo Bubble Sort
    const n = array.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};
    
// Função de ordenação Selection Sort
const selection_sort = (array) => {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

// Função de particionamento
const particionamento = (array, start, end, pivot) => {
    let i = start - 1;
    
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }    
    swap(array, i + 1, end);
    return i + 1;
};

// Função Quick Sort
const quick_sort = (array, start, end) => {
    if (start < end) {
        const pivotIndex = particionamento(array, start, end, array[end]);
    quick_sort(array, start, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, end);
    }    
};






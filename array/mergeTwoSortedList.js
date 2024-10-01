/* USING MERGE SORT ALGORITHM */
/* SOLVED USING ARRAY LIST */
// const mergeTwoSortedList = (list1,list2) => {
//     let combinedList = [];
//     // USING TWO POINTER REFERENCE OF STARTING INDEX AS 0
//     let i=0;
//     let j=0;
//     while((i < list1.length) && (j < list2.length)) {
//         if(list1[i] < list2[j]) {
//             combinedList.push(list1[i]);
//             i++;
//         } else {
//             combinedList.push(list2[j]);
//             j++;
//         }
//     }
//     while(i < list1.length) {
//         combinedList.push(list1[i]);
//         i++;
//     }
//     while(j < list2.length) {
//         combinedList.push(list2[j]);
//         j++;
//     }
//     return combinedList;
// }

// console.log(mergeTwoSortedList([1,2,4],[1,3,4]));

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

/* USING MERGE SORT ALGORITHM */
/* SOLVED USING LINKED LIST */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoSortedList = (linkedList1,linkedList2) => {
    let combinedList = new ListNode();
    let currentNode = combinedList;
    while(linkedList1 !== null && linkedList2 !== null) {
        if(linkedList1.value < linkedList2.value) {
            currentNode.next = linkedList1;
            linkedList1 = linkedList1.next;
        } else {
            currentNode.next = linkedList2;
            linkedList2 = linkedList2.next;
        }
        currentNode = currentNode.next;
    }

    while(linkedList1 !== null) {
        currentNode.next = linkedList1;
        linkedList1 = linkedList1.next;
    }

    while(linkedList2 !== null) {
        currentNode.next = linkedList2;
        linkedList2 = linkedList2.next;
    }
    return combinedList.next;
}

// Example usage:
let linkedList1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let linkedList2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoSortedList(linkedList1,linkedList2));

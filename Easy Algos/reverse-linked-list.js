/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * https://leetcode.com/explore/interview/card/amazon/77/linked-list/2979/
 */




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const reverseList = function(head) {
    let currentNode = head;
    let previousNode = null;
    
    while (currentNode !== null) {
        let leadNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = leadNode;
    }
    return previousNode;
};
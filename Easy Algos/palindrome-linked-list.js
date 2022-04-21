/**
 * Given the head of a singly linked list, return true if it is a palindrome.
 * 
 * 
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
 * @return {boolean}
 */
 const isPalindrome = function(head) {
    let slow = fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    
    slow = reverseLinkedList(slow);
    fast = head;
    
    while (slow !== null) {
        if (slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};

function reverseLinkedList(secondHalf) {
    let previousNode = null;
    let leaderNode = secondHalf;
    let currentNode = secondHalf;
    
    while(currentNode) {
        leaderNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = leaderNode;
    }
    return previousNode;
};
/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * 
 * If there are two middle nodes, return the second middle node.
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
 * @return {ListNode}
 */

 const middleNode = function(head) {
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    return slow;
};
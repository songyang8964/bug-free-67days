**题目链接**: [LeetCode]([url](https://leetcode.com/problems/design-linked-list/description/))
**核心技巧**: **虚拟头节点**

## 🧠 解题思路
1.  铁律：先连后断，把需要新增的节点的下一个指针指向后面，才能把前一个节点指向新节点的指针断掉
2.  如果链表长度为 5，addAtIndex(5, 100) 操作是否合法？答案：合法：index == size 时，逻辑等同于 addAtTail
3.  使用虚拟头节点（Dummy Head）的主要目的是什么？答案： 哨兵节点是解决链表边界问题（尤其是头节点操作）的通用技巧

## ⏳ 复杂度分析
- **时间复杂度**: O(N)
- **空间复杂度**: O(1)

## 💻 代码 (Java)

```java


class MyLinkedList {
    private class ListNode {
        int val;
        ListNode next;

        ListNode(int val) {
            this.val = val;
            this.next = null;
        }
    }

    private int size;
    private ListNode dummyHead;


    public MyLinkedList() {
        this.size = 0;
        this.dummyHead = new ListNode(0);
    }

    // 获取链表中第 index 个节点的值。如果索引无效，返回 -1。
    // index 是从 0 开始的。
    public int get(int index) {
        // 1. 检查索引有效性
        if (index < 0 || index >= size) {
            return -1;
        }
        ListNode cur = dummyHead;
        for (int i = 0; i <= index; i++) {
            cur = cur.next;
        }
        return cur.val;
    }

    public void addAtHead(int val) {
        addAtIndex(0, val);

    }

    public void addAtTail(int val) {
        addAtIndex(size, val);

    }

    public void addAtIndex(int index, int val) {
        if (index > size) {
            return;
        }
        if (index < 0) {
            index = 0;
        }
        size++;

        // 找到前驱节点, 即index - 1
        ListNode pred = dummyHead;
        for (int i = 0; i < index; i++) {
            pred = pred.next;
        }
        ListNode toAdd = new ListNode(val);
        // 关键步骤，顺序不能反
        toAdd.next = pred.next;
        pred.next = toAdd;
    }

    public void deleteAtIndex(int index) {
        if (index < 0 || index >= size) {
            return;
        }
        ListNode pred = dummyHead;
        // 找到要删除节点的前驱节点
        for (int i = 0; i < index; i++) {
            pred = pred.next;
        }
        pred.next = pred.next.next;
        size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */

```
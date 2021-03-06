/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
        
    
    
    const longestPath = function(node) {
        if(node === null){
            return 0
        }
        
        const leftBranch = longestPath(node.left)
        const rightBranch = longestPath(node.right)
        
        return leftBranch > rightBranch ? leftBranch + 1 : rightBranch + 1
        
    }
    
    return longestPath(root)
};
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import static org.junit.Assert.assertEquals;

/**
 * 
 */

/**
 * @author Evan McCroary
 *
 */
class LowestCommonAncestorTest {

    // LCA is not root
	@Test
	void testNotRoot() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        tree.root = new Node(1); 
        tree.root.left = new Node(2); 
        tree.root.right = new Node(3); 
        tree.root.left.left = new Node(4); 
        tree.root.left.right = new Node(5); 
        tree.root.right.left = new Node(6); 
        tree.root.right.right = new Node(7); 
        
		assertEquals(tree.findLCA(4,5), 2);
	}
	
	// LCA is root
	@Test
	void testIsRoot() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        tree.root = new Node(1); 
        tree.root.left = new Node(2); 
        tree.root.right = new Node(3); 
        tree.root.left.left = new Node(4); 
        tree.root.left.right = new Node(5); 
        tree.root.right.left = new Node(6); 
        tree.root.right.right = new Node(7); 
        
		assertEquals(tree.findLCA(4,6), 1);
	}
	
	
}


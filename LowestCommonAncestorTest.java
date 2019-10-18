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
	
	// LCA is node1
	@Test
	void testIsNode1() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        	tree.root = new Node(1); 
        	tree.root.left = new Node(2); 
        	tree.root.right = new Node(3); 
        	tree.root.left.left = new Node(4); 
        	tree.root.left.right = new Node(5); 
        	tree.root.right.left = new Node(6); 
        	tree.root.right.right = new Node(7); 
        
		assertEquals(tree.findLCA(3,7), 3);
	}
		
	// LCA is node2
	@Test
	void testIsNode2() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        	tree.root = new Node(1); 
        	tree.root.left = new Node(2); 
        	tree.root.right = new Node(3); 
        	tree.root.left.left = new Node(4); 
        	tree.root.left.right = new Node(5); 
        	tree.root.right.left = new Node(6); 
        	tree.root.right.right = new Node(7); 
        
		assertEquals(tree.findLCA(6,3), 3);
	}
		
		
	// LCA is in a BT all going to the right
	@Test
	void testAllRight() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        	tree.root = new Node(1); 
        	tree.root.right = new Node(2); 
        	tree.root.right.right = new Node(3); 
        	tree.root.right.right.right = new Node(4); 
        	tree.root.right.right.right.right = new Node(5); 
        
		assertEquals(tree.findLCA(4,5), 4);
	}
		
	// LCA in a BT moving to the left
	@Test
	void testBTLeft() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        	tree.root = new Node(1); 
        	tree.root.left = new Node(2); 
        	tree.root.left.left = new Node(3); 
        	tree.root.left.left.left = new Node(4); 
        		tree.root.left.left.left.left = new Node(5); 
        
		assertEquals(tree.findLCA(2,3), 2);
	}
		
		
	// LCA with node 2 not in BT
	@Test
	void testNode2NotInBT() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        	tree.root = new Node(1); 
        	tree.root.left = new Node(2); 
        	tree.root.right = new Node(3); 
        	tree.root.left.left = new Node(4); 
        	tree.root.left.right = new Node(5); 
        	tree.root.right.left = new Node(6); 
        	tree.root.right.right = new Node(7); 
        
		assertEquals(tree.findLCA(2,9), -1);
	}		
		
	// LCA with node 1 not in BT
	@Test
	void testNode1NotInBT() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        	tree.root = new Node(1); 
        	tree.root.left = new Node(2); 
        	tree.root.right = new Node(3); 
        	tree.root.left.left = new Node(4); 
        	tree.root.left.right = new Node(5); 
        	tree.root.right.left = new Node(6); 
        	tree.root.right.right = new Node(7); 
        
		assertEquals(tree.findLCA(0,4), -1);
	}		

	// LCA with node 1  and 2 not in BT
	@Test
	void testNode1adn2NotInBT() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        	tree.root = new Node(1); 
        	tree.root.left = new Node(2); 
        	tree.root.right = new Node(3); 
        	tree.root.left.left = new Node(4); 
        	tree.root.left.right = new Node(5); 
        	tree.root.right.left = new Node(6); 
        	tree.root.right.right = new Node(7); 
        
		assertEquals(tree.findLCA(0,9), -1);
	}
	
	// LCA with node 1  and 2 are both the root
	@Test
	void testNode1adn2asRoot() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        	tree.root = new Node(1); 
        	tree.root.left = new Node(2); 
        	tree.root.right = new Node(3); 
        	tree.root.left.left = new Node(4); 
       		tree.root.left.right = new Node(5); 
        	tree.root.right.left = new Node(6); 
        	tree.root.right.right = new Node(7); 
        
		assertEquals(tree.findLCA(1,1), 1);
	}
	
	//LCA with node 1 and 2 as negative integers
	@Test
	void testNode1adn2asNegative() {
		LowestCommonAncestor tree = new LowestCommonAncestor(); 
        	tree.root = new Node(1); 
        	tree.root.left = new Node(2); 
        	tree.root.right = new Node(3); 
        	tree.root.left.left = new Node(4); 
        	tree.root.left.right = new Node(5); 
        	tree.root.right.left = new Node(6); 
        	tree.root.right.right = new Node(7); 
        
		assertEquals(tree.findLCA(-1,-15), -1);
	}
	
	
	
				
	
	
}



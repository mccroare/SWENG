import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;
import java.util.ArrayList;
import java.util.Iterator;

import org.junit.jupiter.api.Test;


import org.junit.jupiter.api.Test;

class DAGTest {

	// test graph is working
	@Test
	void testGraphSetUp() {
		DAG test = new DAG(10);
		assertEquals(test.V(), 10);
		
	}
	
	//test function is working
	@Test
	void testValidateVertex() {
		int v = 10;
		DAG test = new DAG(v);
		for (int i = 0; i<v; i++) {
			assertEquals(test.validateVertex(i), true);
		}
		
		//error cases
		assertEquals(test.validateVertex(-1), false);
		assertEquals(test.validateVertex(11), false);
	}
	
	//test  function is working
	@Test
	void testAddEdge() {
		DAG test = new DAG(10);
		test.addEdge(3, 7);		
		assertEquals(test.outdegree(3), 1);
		assertEquals(test.indegree(7), 1);

		ArrayList<Integer> returnIterable = new ArrayList<Integer>();
		returnIterable.add(7); 
		assertEquals(test.adj(3), (Iterable<Integer>)returnIterable);
		
	}

	@Test
	void testHasCycle() {
		//test for an empty graph
		DAG test = new DAG(8);
		assertEquals("A cycle should not exist as there are no nodes", test.hasCycle(), false);
		
		//create a graph without a cycle
		DAG test2 = new DAG(3);
		test2.addEdge(0, 1);
		test2.addEdge(1, 2);
		assertEquals("A cycle does not exist within this graph", test2.hasCycle(), false);
		
		//create a graph with an obvious cycle
		DAG test3 = new DAG(3);
		test3.addEdge(0, 1);
		test3.addEdge(1, 2);
		test3.addEdge(2, 1);
		test3.addEdge(2, 0);
		
		assertEquals("A cycle exists", test3.hasCycle(), true);
	}

	
	@Test
	void testHasCycle() {
		//test for an empty graph
		DAG test = new DAG(8);
		assertEquals("A cycle should not exist as there are no nodes", test.hasCycle(), false);
		
		//create a graph without a cycle
		DAG test2 = new DAG(3);
		test2.addEdge(0, 1);
		test2.addEdge(1, 2);
		assertEquals("A cycle does not exist within this graph", test2.hasCycle(), false);
		
		//create a graph with an obvious cycle
		DAG test3 = new DAG(3);
		test3.addEdge(0, 1);
		test3.addEdge(1, 2);
		test3.addEdge(2, 1);
		test3.addEdge(2, 0);
		
		assertEquals("A cycle exists", test3.hasCycle(), true);
	}
	
	@Test 
	void testLCA() {
		//test for empty graph
		DAG test = new DAG(8);
		assertEquals(test.findLCA(5, 0), -1);
		
		//test graph 
		test.addEdge(0, 1);
		test.addEdge(0, 2);
		test.addEdge(1, 3);
		test.addEdge(0, 3);
		test.addEdge(2, 3);
		assertEquals(test.findLCA(1, 3), 0);
		
		
		//out of range
		assertEquals(test.findLCA(10, 7), -1);
	}
}

	
}
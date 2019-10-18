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

	
}
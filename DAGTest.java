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
	
}
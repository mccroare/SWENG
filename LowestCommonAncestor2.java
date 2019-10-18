
//Create a Directed Acyclic Graph 
import java.util.*; 
import java.util.ArrayList; 
import java.util.List;

public class LowestCommonAncestor2{ 
	int V; // No. of vertices 

	List<Integer> adjListArray[]; 

	public LowestCommonAncestor2(int V) { 

		this.V = V; 

		@SuppressWarnings("unchecked") 
		List<Integer> adjListArray[] = new LinkedList[V]; 

		this.adjListArray = adjListArray; 

		for (int i = 0; i < V; i++) { 
			adjListArray[i] = new LinkedList<>(); 
		} 
	} 
	// Utility function to add edge 
	public void addEdge(int src, int dest) { 

		this.adjListArray[src].add(dest); 

	} 
	
	
	public void findLCA() {
		
	}
	
	

	
	// Driver code 
	public static void main(String[] args) { 

		// Create a graph  
		LowestCommonAncestor2 graph = new LowestCommonAncestor2(6); 
		graph.addEdge(5, 2); 
		graph.addEdge(5, 0); 
		graph.addEdge(4, 0); 
		graph.addEdge(4, 1); 
		graph.addEdge(2, 3); 
		graph.addEdge(3, 1); 
		

	} 
} 




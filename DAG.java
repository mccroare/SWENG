import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

public class DAG {
    private int V; 
    private int E; 
    private ArrayList<Integer>[] adj; 
    private int[] indegree;
    private boolean marked[]; 
    private boolean hasCycle; 
    private boolean stack[]; 
    private int[] distTo; 
    private int[] edgeTo; 

    public DAG(int V){
        if (V < 0) throw new IllegalArgumentException("The number of vertices in the graph must be greater than 0");

        this.V = V;
        this.E = 0;
        this.indegree = new int[V];
        this.marked = new boolean[V];
        this.stack = new boolean[V];
        this.adj = (ArrayList<Integer>[]) new ArrayList[V];

        for (int i = 0; i < V; i++){
            adj[i] = new ArrayList<Integer>();
        }

    }
}
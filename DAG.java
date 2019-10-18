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

    public int V(){
        return V;
    }

    public int E(){
        return E;
    }

    //Check vertex fits size of the graph
    public boolean validateVertex(int v){
        if (v > 0 && v <= this.V){
            return true;
        } else {
            return false;
        }
    }

    public boolean addEdge(int from, int to){
        if (validateVertex(from) && validateVertex(to)){
            adj[from].add(to);  
            indegree[to]++;     
            E++;
            return true;
        }else{
            System.out.println("Please enter vertices which exist within the graph");
            return false;
        }
    }


    //Return edges point to node
    public int indegree(int v){
        if (!validateVertex(v)){
            return -1;
        } else {
            return this.indegree[v];
        }
    }

  
    //Returns edges from node
    public int outdegree(int v){
        if (!validateVertex(v)){          
            return -1;
        } else {
            return this.adj[v].size();
        }
    }



    //Return list of adjacent vertices in adj
    public Iterable<Integer> adj(int v){
        return adj[v];
    }

}
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



    public boolean hasCycle(){ return this.hasCycle;}


    public boolean findCycle(int v){
        marked[v] = true;
        stack[v] = true;

        for (int i : adj(v)){
            if (!marked[i]){
                findCycle(i);
            } 
            else if (stack[i]){
                hasCycle = true;
                return true;    
            }
        }

        stack[v] = false;
        return false;
    }


    //Breadth First Search of DAG
    public ArrayList<Integer> BFS(int source){
        boolean visited[] = new boolean[this.V];

        LinkedList<Integer> queue = new LinkedList<Integer>();
        ArrayList<Integer> order = new ArrayList<Integer>();

        visited[source] = true;

        queue.add(source);


        while (queue.size()!=0){
            source = queue.poll();
            order.add(source); 
            
            
            Iterator<Integer> iter = adj(source).iterator();
            while (iter.hasNext()){
                int node = iter.next();
                if (!visited[node]){
                    visited[node] = true;
                    queue.add(node);
                }
            }

        }

        return order;
    }

    

    public DAG reverse(){
        DAG reversedDAG = new DAG(this.V);
        for (int i = 0; i < this.V; i++){
            for (int j: adj(i)) {
                reversedDAG.addEdge(j, i); 
            }
        }
        return reversedDAG;
    }

    public int findLCA(int v1, int v2){
        if (findCycle(0)){
            System.out.println("Cycle found in the graph, graph is not a DAG");
            return -1; 
        }
        
        if (!this.validateVertex(v1) || !this.validateVertex(v2)) return -1;

        DAG reversed = this.reverse();
        ArrayList<Integer> v1Path = reversed.BFS(v1);
        ArrayList<Integer> v2Path = reversed.BFS(v2);
        ArrayList<Integer> commonAncestors = new ArrayList<Integer>();

        boolean commonAncestorFound = false;

        for (int i = 0; i < v1Path.size(); i++){
            for (int j = 0; j < v2Path.size(); j++){
                if (v1Path.get(i) == v2Path.get(j)){
                    commonAncestors.add(v1Path.get(i));
                    commonAncestorFound = true;
                }
            }
        }

        if (commonAncestorFound){
            return commonAncestors.get(0); 
        } else {
            return -1; 
        }
        
    }

}


}
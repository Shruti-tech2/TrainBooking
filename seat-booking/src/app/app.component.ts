import { Component } from '@angular/core';
import { Cell } from './model/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seat-booking';
  seats=0;
  matrixData=[
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, -1, -1, -1, -1] 
    ];
  Book()
  {
    let n: number =80, m:number=7;
      
    this.matrixData = this.book(this.matrixData,n,m,this.seats);
  }

  help(matrix:number[][], src:number[],k:number,cell:Cell[])
  {
    cell.push(new Cell(src[0],src[1]));
    if(k==1){
      return;
    }
    const r = this.findNearestZero(matrix,src);
    if(r!=null)
    {
      matrix[r[0]][r[1]] = 1;
      this.help(matrix,r,k-1,cell);
    }
  }

  book(matrix:number[][], n:number,m:number,k:number):number[][]{
    let cells:Cell[][]=[];
    for(let i=0;i<n;i++)
    {
      for(let j=0;j<m;j++)
      {
        if(matrix[i][j]==0)
        {
          let src: number[] = [i,j];
          let mat: number[][] = [];
          for(let x=0;x<n;x++)
          {
            mat[x] = matrix[x].slice(0,m);
          }
          mat[i][j]=1;
          cells.push([]);
          this.help(mat,src,k,cells[cells.length-1]);
        }
      }
    }
    let mir:number, mic:number,mxr:number,mxc:number,min=Number.MAX_SAFE_INTEGER, minr=-1,id=-1;
    for(let i = 0;i<cells.length;i++)
    {
      mir = Number.MAX_SAFE_INTEGER;
      mic = Number.MAX_SAFE_INTEGER;
      mxr = 0;
      mxc = 0;

      const list = cells[i];
      if(list.length == k)
      {
        for(const cell of list){
          if(mir>cell.x)mir = cell.x;
          if(mxr<cell.x)mxr = cell.x;

          if(mic>cell.y)mic=cell.y;
          if(mxc<cell.y)mxc=cell.y;
        }

        if(min>(mxr-mir)){
          min = (mxr-mir);
          minr = mxr - mir;
          id = i;
        }else if(min==(mxr-mir)){
          if(minr > (mxr-mir)){
            id=i;
            minr = mxr - mir;
          }
        }
      }
    }
    const list = cells[id];
    for(const cell of list){
      matrix[cell.x][cell.y]=1;
    }
    return matrix;
  }



  findNearestZero(matrix:number[][],src:number[])
  {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const visited: boolean[][] = new Array(rows).fill(false).map(()=>new Array(cols).fill(false));
    const sameRowQueue: number[][]=[];
    const otherRowQueue: number[][] = [];

    sameRowQueue.push(src);
    visited[src[0]][src[1]] = true;
    const directions: number[] = [-1,0,1,0,-1];
    while(sameRowQueue.length>0 || otherRowQueue.length>0){
      while(sameRowQueue.length>0){
        const curr: number[] = sameRowQueue.shift()!;
        if(matrix[curr[0]][curr[1]]==0){
          return curr;
        }
        for(let j=0;j<4;j++){
          const newRow = curr[0]+directions[j];
          const newCol = curr[1]+directions[j+1];

          if(newRow>=0 && newRow<rows && newCol>=0 && newCol<cols && !visited[newRow][newCol])
          {
            visited[newRow][newCol] = true;
            if(newRow === src[0]){
              sameRowQueue.push([newRow,newCol]);
            }else{
              otherRowQueue.push([newRow,newCol]);
            }
          }
        }
      }
      while(otherRowQueue.length>0)
      {
        const curr: number[] = otherRowQueue.shift()!;
        if(matrix[curr[0]][curr[1]] === 0){
          return curr;
        }
        for(let j=0;j<4;j++){
          const newRow = curr[0]+directions[j];
          const newCol = curr[1] + directions[j+1];
          if(newRow>=0 && newRow<rows && newCol>=0 && newCol<cols && !visited[newRow][newCol])
          {
            visited[newRow][newCol] = true;
            otherRowQueue.push([newRow,newCol]);
          }
        }
      }
    }
    return null;
  }
}



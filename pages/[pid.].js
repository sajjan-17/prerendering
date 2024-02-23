import { Fragment } from "react";
import fs from 'fs/promises'
import path from 'path';

function ProductDetailPage(){
    
    return(
        <Fragment>
            <h1>TITLE</h1>
            <p> DESCRIPTION</p>
        </Fragment>

    )

    
}
export async function getStaticProps(context){
  const {params} = context;

  const productId= params.pid;
  const filePath= path.join(process.cwd(),'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath)
    const data =JSON.parse(jsonData);

}


export default ProductDetailPage;
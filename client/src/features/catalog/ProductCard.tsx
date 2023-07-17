import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props{
    product: Product;
}

export default function ProductCard({product}: Props){
    return(
        
            <Card >

             <CardHeader
               avatar={
                  <Avatar sx={{bgcolor:'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                  </Avatar>
               }
               title={product.name}
               titleTypographyProps={{
                sx:{fontWeight: 'bold',color:'primary.main'}
               }}
             />
              <CardMedia
                sx={{ height: 140, backgroundSize:'contain', bgcolor:'ButtonHighlight'}}
                image={product.pictureUrl}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom color="secondary" variant="h5" component="div">
                  ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.brand} / {product.type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to Card</Button>
                <Button size="small">Viev</Button>
              </CardActions>
            </Card>
          );
    
}
 
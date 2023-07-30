import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import { currencyFormat } from "../../app/util/util";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync, setBasket } from "../basket/BasketSlice";


interface Props{
    product: Product;
}

export default function ProductCard({product}: Props){
  const {status} = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

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
                 {currencyFormat(product.price)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.brand} / {product.type}
                </Typography>
              </CardContent>
              <CardActions>
                <LoadingButton
                
                 loading={status.includes('pendingAddItem' + product.id)}
                  onClick={()=>dispatch(addBasketItemAsync({productId: product.id}))} 
                  size="small">Add to Card</LoadingButton>

                <Button component={Link} to={`/catalog/${product.id}`} size="small">Viev</Button>
              </CardActions>
            </Card>
          );
    
}
 
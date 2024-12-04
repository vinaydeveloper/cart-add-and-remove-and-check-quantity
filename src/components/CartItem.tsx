import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import '../styles/CartItem.css';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="quantity-btn"
          >
            <Minus size={16} />
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="quantity-btn"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      <button onClick={() => onRemove(item.id)} className="remove-btn">
        <Trash2 size={20} />
      </button>
    </div>
  );
};
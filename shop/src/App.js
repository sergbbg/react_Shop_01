import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import Items from './components/items';
import Categories from './components/categories';
import Show from './components/Show';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currrentItems: [],
      items: [
         {
          id:1,
          title: 'Стул 1',
          img:'styl.jpg',
          desk: 'lorem iflf lflfl lfllf',
          category: 'chairs',
          price: '49.99'
         },
         {
          id:2,
          title: 'Стул 2',
          img:'стул4.jpg',
          desk: 'lorem iflf lflfl lfllf',
          category: 'chairs',
          price: '49.99'
         },
         {
          id:3,
          title: 'Стул 3',
          img:'styl.jpg',
          desk: 'lorem iflf lflfl lfllf',
          category: 'chairs',
          price: '49.99'
         },
         {
          id:4,
          title: 'Диван 1',
          img:'диван1.jpg',
          desk: 'lorem iflf lflfl lfllf',
          category: 'sofa',
          price: '49.99'
         },
         {
          id:5,
          title: 'Диван 2',
          img:'диван2.jpg',
          desk: 'lorem iflf lflfl lfllf',
          category: 'sofa',
          price: '49.99'
         },
         {
          id:6,
          title: 'Диван 3',
          img:'диван3.webp',
          desk: 'lorem iflf lflfl lfllf',
          category: 'sofa',
          price: '49.99'
         },
      ],
      show: false,
      fullItem: {}
    }

    this.state.currrentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
  
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory =this.chooseCategory.bind(this)
    this.onShowItem =this.onShowItem.bind(this)
  
  }

  render(){
    return (
   <div className='wrapper'>
      <Header orders = {this.state.orders} onDelete ={this.deleteOrder}/>

        <Categories chooseCategory = {this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items ={this.state.currrentItems} onAdd ={this.addToOrder}/>
      
      {this.state.show && <Show onShowItem={this.onShowItem}  onAdd ={this.addToOrder} item={this.state.fullItem}/>}
      <Footer/>
    </div>
  );
  }
  

onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({
    show: !this.state.show
  })
}  

chooseCategory(category) {
  if(category === 'all') {
    this.setState({currrentItems: this.state.items})
    return
  }

  this.setState({

    currrentItems:this.state.items.filter(el => el.category === category)
  })
  
}
 
  
deleteOrder(id){
 this.setState({orders: this.state.orders.filter(el => el.id !== id )})
}



addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isInArray = true
  })
  if(!isInArray)

  this.setState({orders: [...this.state.orders, item]})

}

}

export default App;
  
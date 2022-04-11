import ShoppingList from './ShoppingList'
  export default {
      title: 'ShoppingList',
      component: ShoppingList
  }
        
  const Template = args => <ShoppingList {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            
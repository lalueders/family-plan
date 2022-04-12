import ShoppingListItem from './ShoppingListItem'
  export default {
      title: 'ShoppingListItem',
      component: ShoppingListItem
  }
        
  const Template = args => <ShoppingListItem {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            
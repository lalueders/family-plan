import NewShoppingListItem from './NewShoppingListItem'
  export default {
      title: 'NewShoppingListItem',
      component: NewShoppingListItem
  }
        
  const Template = args => <NewShoppingListItem {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            
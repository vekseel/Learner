using mobile_app.ViewModels;
using System.ComponentModel;
using Xamarin.Forms;

namespace mobile_app.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}
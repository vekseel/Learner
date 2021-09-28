using mobile_app.ViewModels;
using mobile_app.Views;
using System;
using System.Collections.Generic;
using Xamarin.Forms;

namespace mobile_app
{
    public partial class AppShell : Xamarin.Forms.Shell
    {
        public AppShell()
        {
            InitializeComponent();
            Routing.RegisterRoute(nameof(ItemDetailPage), typeof(ItemDetailPage));
            Routing.RegisterRoute(nameof(NewItemPage), typeof(NewItemPage));
        }

    }
}

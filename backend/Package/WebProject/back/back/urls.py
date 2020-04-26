"""back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
#from api.views import categories_list, product_detail, category_products, category_detail, products_list
from api.views import CategoryList, CategoryDetails, CategoryProducts, ProductList, ProductDetails

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', obtain_jwt_token),
    path('api/categories/', CategoryList.as_view()),
    path('api/categories/<int:pk>/', CategoryDetails.as_view()),
    path('api/categories/<int:category_id>/products/', CategoryProducts.as_view()),
    path('api/products/', ProductList.as_view()),
    path('api/products/<int:pk>/', ProductDetails.as_view()),
]

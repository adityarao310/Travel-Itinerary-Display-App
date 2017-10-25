from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home_page, name='home_page'),
    url(r'^trip/(?P<itid>\d+)/$', views.trip_page, name='trip_page'),
]

from django.shortcuts import render
from .models import Location, Trip, LocationTrip

# home page (not visible to users, but just in case)
def home_page(request):
    trips = Trip.objects.filter(title='Euro').order_by('-created_date')
    return render(request, 'app/home_page.html', {'trips': trips})

def trip_page(request):
    return render(request, 'app/trip_page.html')

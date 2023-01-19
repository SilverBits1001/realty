import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../styleConstants'
import { usdFormat } from '../helpers/helpers'
import { Button, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { updateLiked } from '../src/features/liked/likedSlice';
import { getDetails } from '../helpers/fetchRequests'
import axios from 'axios'



const houseDetail = {
"home": {
"__typename": "Home",
"property_id": "2994590763",
"last_update_date": "2023-01-15T19:35:14Z",
"last_price_change_date": null,
"last_price_change_amount": null,
"listing_id": "2951386610",
"status": "for_sale",
"href": "https://www.realtor.com/realestateandhomes-detail/23833-Eshelman-Ave_Lomita_CA_90717_M29945-90763",
"days_on_market": null,
"list_date": "2023-01-12T20:23:27Z",
"create_date": "2023-01-12T20:23:27Z",
"mortgage": {
"__typename": "Mortgage",
"property_tax_rate": 0.0125,
"rates_url": "https://www.realtor.com/mortgage/rates/?from=mobile#zip=90717&property_price=699000&mlid=2994590763",
"insurance_rate": 0.003,
"estimate": {
"__typename": "MortgageEstimate",
"loan_amount": 559000,
"monthly_payment": 4347,
"total_payment": 1239855,
"down_payment": 140000,
"average_rate": {
"__typename": "Rate",
"rate": 0.06256,
"loan_type": {
"__typename": "LoanType",
"term": 30
}
},
"monthly_payment_details": [
{
"__typename": "MonthlyOwnershipExpense",
"type": "principal_and_interest",
"amount": 3444,
"display_name": "Principal & Interest"
},
{
"__typename": "MonthlyOwnershipExpense",
"type": "home_insurance",
"amount": 175,
"display_name": "Home Insurance"
},
{
"__typename": "MonthlyOwnershipExpense",
"type": "hoa_fees",
"amount": 0,
"display_name": "HOA Fees"
},
{
"__typename": "MonthlyOwnershipExpense",
"type": "mortgage_insurance",
"amount": 0,
"display_name": "Mortgage Insurance"
},
{
"__typename": "MonthlyOwnershipExpense",
"type": "property_tax",
"amount": 728,
"display_name": "Property Tax"
}
]
},
"average_rates": [
{
"__typename": "Rate",
"loan_type": {
"__typename": "LoanType",
"loan_id": "thirty_year_fix"
},
"rate": 0.06256
},
{
"__typename": "Rate",
"loan_type": {
"__typename": "LoanType",
"loan_id": "twenty_year_fix"
},
"rate": 0.05933
},
{
"__typename": "Rate",
"loan_type": {
"__typename": "LoanType",
"loan_id": "fifteen_year_fix"
},
"rate": 0.05463
},
{
"__typename": "Rate",
"loan_type": {
"__typename": "LoanType",
"loan_id": "ten_year_fix"
},
"rate": 0.0555
},
{
"__typename": "Rate",
"loan_type": {
"__typename": "LoanType",
"loan_id": "thirty_year_fha"
},
"rate": 0.0648
},
{
"__typename": "Rate",
"loan_type": {
"__typename": "LoanType",
"loan_id": "thirty_year_va"
},
"rate": 0.05838
},
{
"__typename": "Rate",
"loan_type": {
"__typename": "LoanType",
"loan_id": "five_one_arm"
},
"rate": 0.06236
},
{
"__typename": "Rate",
"loan_type": {
"__typename": "LoanType",
"loan_id": "seven_one_arm"
},
"rate": 0.06111
}
]
},
"hoa": {
"__typename": "HomeHOA",
"fee": 0,
"historic_fee": null
},
"buyers": null,
"description": {
"__typename": "HomeDescription",
"baths_consolidated": "1",
"baths": 1,
"baths_min": null,
"baths_max": null,
"heating": null,
"cooling": null,
"beds": 2,
"beds_min": null,
"beds_max": null,
"garage": 1,
"garage_min": null,
"garage_max": null,
"pool": null,
"sqft": 1002,
"sqft_min": null,
"sqft_max": null,
"styles": [
"colonial_revival"
],
"lot_sqft": 7564,
"units": null,
"stories": 1,
"type": "single_family",
"sub_type": null,
"text": "Fantastic purchase opportunity on this 2 br 1 ba single family home located on an extra large lot with great curb appeal and semicircular driveway. Composition roof and fresh interior paint throughout. Formal living room with brick fireplace, original wood floors throughout the living area, bright and spacious kitchen with separate dining area, linoleum floors, ample cabinets and tiled counter tops. newer stainless freestanding cooktop/oven, nice size bedrooms (ceiling fan and mirrored wardrobe doors), bathroom with tiled vanity and tub/Shower wall, laundry area which includes a washer/Dryer and deep sink in oversized 1 car direct access garage, built in storage cabinets in garage, HUGE backyard for limitless possibilities (more backyard beyond the wood fence) and 2 separate storage sheds/ workshops. Don't miss out!",
"year_built": 1952,
"name": null
},
"pet_policy": null,
"assigned_schools": {
"__typename": "SchoolList",
"schools": [
{
"__typename": "School",
"district": {
"__typename": "SchoolDistrict",
"name": "Los Angeles Unified School District",
"id": "06151432641",
"phone": null,
"student_count": null,
"grades": null
}
},
{
"__typename": "School",
"district": {
"__typename": "SchoolDistrict",
"name": "Los Angeles Unified School District",
"id": "06151432641",
"phone": null,
"student_count": null,
"grades": null
}
},
{
"__typename": "School",
"district": {
"__typename": "SchoolDistrict",
"name": "Los Angeles Unified School District",
"id": "06151432641",
"phone": null,
"student_count": null,
"grades": null
}
}
]
},
"nearby_schools": {
"__typename": "SchoolList",
"schools": [
{
"__typename": "School",
"assigned": true,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.804149,
"lon": -118.30674
},
"distance_in_miles": 0.5,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"high"
],
"funding_type": "public",
"grades": [
"9",
"10",
"11",
"12"
],
"id": "078603801",
"name": "Nathaniel Narbonne Senior High School",
"parent_rating": 3,
"rating": 5,
"student_count": 2176
},
{
"__typename": "School",
"assigned": true,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.804582,
"lon": -118.302448
},
"distance_in_miles": 0.7,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"elementary"
],
"funding_type": "public",
"grades": [
"K",
"1",
"2",
"3",
"4",
"5",
"6"
],
"id": "078604741",
"name": "President Avenue Elementary School",
"parent_rating": 5,
"rating": 5,
"student_count": 416
},
{
"__typename": "School",
"assigned": true,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.792782,
"lon": -118.312797
},
"distance_in_miles": 1,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"middle"
],
"funding_type": "public",
"grades": [
"6",
"7",
"8"
],
"id": "078601121",
"name": "Alexander Fleming Middle School",
"parent_rating": 3,
"rating": 6,
"student_count": 1332
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.803727,
"lon": -118.306641
},
"distance_in_miles": 0.5,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"high"
],
"funding_type": "public",
"grades": [
"9",
"10",
"11",
"12"
],
"id": "079016051",
"name": "Humanities And Arts (Harts) Academy Of Los Angeles",
"parent_rating": null,
"rating": 5,
"student_count": 407
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.802606,
"lon": -118.307117
},
"distance_in_miles": 0.6,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"high"
],
"funding_type": "public",
"grades": [
"9",
"10",
"11",
"12"
],
"id": "078604531",
"name": "George S. Patton Continuation School",
"parent_rating": 5,
"rating": null,
"student_count": 69
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.801072,
"lon": -118.320856
},
"distance_in_miles": 0.6,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"elementary"
],
"funding_type": "public",
"grades": [
"K",
"1",
"2",
"3",
"4",
"5"
],
"id": "078602911",
"name": "Lomita Math/Science/Technology Magnet School",
"parent_rating": 5,
"rating": 7,
"student_count": 938
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.80481,
"lon": -118.32713
},
"distance_in_miles": 0.7,
"district": {
"__typename": "SchoolDistrict",
"id": "06151428551",
"name": null
},
"education_levels": [
"elementary",
"middle"
],
"funding_type": "private",
"grades": [
"K",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
],
"id": "078718641",
"name": "Nishiyamato Academy",
"parent_rating": 5,
"rating": null,
"student_count": 107
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.819871,
"lon": -118.316036
},
"distance_in_miles": 0.9,
"district": {
"__typename": "SchoolDistrict",
"id": "06151428551",
"name": null
},
"education_levels": [
"elementary"
],
"funding_type": "private",
"grades": [
"PK",
"K",
"1"
],
"id": "078903611",
"name": "Torrance Montessori School",
"parent_rating": 5,
"rating": null,
"student_count": 39
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.819504,
"lon": -118.319565
},
"distance_in_miles": 0.9,
"district": {
"__typename": "SchoolDistrict",
"id": "06151428551",
"name": null
},
"education_levels": [
"high"
],
"funding_type": "private",
"grades": [
"9",
"10",
"11",
"12"
],
"id": "078721211",
"name": "Pacific Lutheran High School",
"parent_rating": 5,
"rating": null,
"student_count": 70
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.793627,
"lon": -118.303657
},
"distance_in_miles": 1.1,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"elementary"
],
"funding_type": "public",
"grades": [
"K",
"1",
"2",
"3",
"4",
"5"
],
"id": "078601851",
"name": "Harbor City Elementary School",
"parent_rating": 5,
"rating": 6,
"student_count": 554
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.822305,
"lon": -118.283622
},
"distance_in_miles": 2.1,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"elementary",
"middle"
],
"funding_type": "public",
"grades": [
"K",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8"
],
"id": "078599651",
"name": "Caroldale Learning Community School",
"parent_rating": 3,
"rating": 5,
"student_count": 919
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.82627,
"lon": -118.285565
},
"distance_in_miles": 2.1,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"middle"
],
"funding_type": "public",
"grades": [
"6",
"7",
"8"
],
"id": "078606931",
"name": "Stephen M. White Middle School",
"parent_rating": 3,
"rating": 5,
"student_count": 1724
}
]
},
"schools": {
"__typename": "SchoolList",
"schools": [
{
"__typename": "School",
"assigned": true,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.804149,
"lon": -118.30674
},
"distance_in_miles": 0.5,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"high"
],
"funding_type": "public",
"grades": [
"9",
"10",
"11",
"12"
],
"id": "078603801",
"name": "Nathaniel Narbonne Senior High School",
"parent_rating": 3,
"rating": 5,
"student_count": 2176
},
{
"__typename": "School",
"assigned": true,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.804582,
"lon": -118.302448
},
"distance_in_miles": 0.7,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"elementary"
],
"funding_type": "public",
"grades": [
"K",
"1",
"2",
"3",
"4",
"5",
"6"
],
"id": "078604741",
"name": "President Avenue Elementary School",
"parent_rating": 5,
"rating": 5,
"student_count": 416
},
{
"__typename": "School",
"assigned": true,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.792782,
"lon": -118.312797
},
"distance_in_miles": 1,
"district": {
"__typename": "SchoolDistrict",
"id": "06151432641",
"name": "Los Angeles Unified School District"
},
"education_levels": [
"middle"
],
"funding_type": "public",
"grades": [
"6",
"7",
"8"
],
"id": "078601121",
"name": "Alexander Fleming Middle School",
"parent_rating": 3,
"rating": 6,
"student_count": 1332
},
{
"__typename": "School",
"assigned": null,
"coordinate": {
"__typename": "Coordinate",
"lat": 33.80481,
"lon": -118.32713
},
"distance_in_miles": 0.7,
"district": {
"__typename": "SchoolDistrict",
"id": "06151428551",
"name": null
},
"education_levels": [
"elementary",
"middle"
],
"funding_type": "private",
"grades": [
"K",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
],
"id": "078718641",
"name": "Nishiyamato Academy",
"parent_rating": 5,
"rating": null,
"student_count": 107
}
]
},
"products": {
"__typename": "ProductSummary",
"products": [
"core.agent",
"core.broker",
"co_broke"
]
},
"list_price": 699000,
"list_price_min": null,
"list_price_max": null,
"price_per_sqft": 698,
"community": null,
"lead_attributes": {
"__typename": "LeadAttributes",
"opcity_lead_attributes": {
"__typename": "OpCityLeadAttributes",
"flip_the_market_enabled": true,
"cashback_enabled": false,
"phones": [
{
"__typename": "OpCityLocalPhone",
"number": "(424)401-0267",
"category": "comm_console"
},
{
"__typename": "OpCityLocalPhone",
"number": "(424)401-0267",
"category": "schedule_tour"
}
],
"local_phone": "(424)401-0267"
},
"ready_connect_mortgage": {
"__typename": "ReadyConnectMortgage",
"show_contact_a_lender": false,
"show_veterans_united": false
},
"show_contact_an_agent": true,
"lead_type": "co_broke",
"show_lead_form": true,
"disclaimer_text": null,
"is_tcpa_message_enabled": null,
"show_text_leads": true
},
"flags": {
"__typename": "HomeFlags",
"is_contingent": true,
"is_garage_present": true,
"is_new_construction": null,
"is_pending": null,
"is_short_sale": null,
"is_foreclosure": null,
"is_senior_community": null,
"is_for_rent": null,
"is_deal_available": null,
"is_price_excludes_land": null,
"is_promotion_present": null,
"is_subdivision": null,
"is_plan": null,
"is_price_reduced": null,
"is_new_listing": true,
"is_coming_soon": null
},
"provider_url": null,
"source": {
"__typename": "MlsSource",
"id": "MRCA",
"disclaimer": {
"__typename": "MlsDisclaimer",
"text": "© 2023, California Regional Multiple Listing Service, Inc. All Rights Reserved.",
"href": null
},
"listing_id": "PW23005157",
"plan_id": null,
"spec_id": null,
"community_id": null,
"name": "CRMLS",
"type": "mls",
"raw": {
"__typename": "MlsRawData",
"style": "Traditional",
"tax_amount": null
}
},
"details": [
{
"__typename": "HomeDetails",
"category": "Bedrooms",
"text": [
"Bedrooms: 2",
"Bedrooms On Main Level: 2"
]
},
{
"__typename": "HomeDetails",
"category": "Bathrooms",
"text": [
"Total Bathrooms: 1",
"Full Bathrooms: 1",
"Bathrooms On Main Level: 1",
"Bathroom 1 Features: Bathtub, Vanity area"
]
},
{
"__typename": "HomeDetails",
"category": "Appliances",
"text": [
"Kitchen Appliances: Disposal, Gas Oven, Gas Range, Refrigerator",
"Appliances YN: Y",
"Laundry Features: In Garage"
]
},
{
"__typename": "HomeDetails",
"category": "Other Rooms",
"text": [
"All Bedrooms Down, Entry, Kitchen, Living Room"
]
},
{
"__typename": "HomeDetails",
"category": "Heating and Cooling",
"text": [
"Fireplace Features: Fireplace: Y",
"Heating Features: Floor Furnace",
"Heating: Yes"
]
},
{
"__typename": "HomeDetails",
"category": "Kitchen and Dining",
"text": [
"Breakfast Room Description: Area, In Kitchen",
"Kitchen Features: Tile Counters"
]
},
{
"__typename": "HomeDetails",
"category": "Interior Features",
"text": [
"Flooring: Vinyl, Wood"
]
},
{
"__typename": "HomeDetails",
"category": "Exterior and Lot Features",
"text": [
"Fencing: Fence YN: Y, Fencing: Wood",
"Other Structures: Shed(s), Storage"
]
},
{
"__typename": "HomeDetails",
"category": "Land Info",
"text": [
"Lot Description: Front Yard, Lot 6500-9999",
"Lot Size Acres: 0.1736455",
"Lot Size Source: Assessor",
"Lot Size Square Feet: 7564"
]
},
{
"__typename": "HomeDetails",
"category": "Garage and Parking",
"text": [
"Garage Spaces: 1",
"Garage Description: Attached",
"Parking Features: Parking YN: Y, Parking Features: Direct Garage Access, Driveway, Garage, Garage Faces Side",
"Parking Total: 1"
]
},
{
"__typename": "HomeDetails",
"category": "School Information",
"text": [
"High School: Narbonne",
"School District: Los Angeles Unified"
]
},
{
"__typename": "HomeDetails",
"category": "Homeowners Association",
"text": [
"Calculated Total Monthly Association Fees: 0"
]
},
{
"__typename": "HomeDetails",
"category": "Amenities and Community Features",
"text": [
"Community Features: Suburban"
]
},
{
"__typename": "HomeDetails",
"category": "Other Property Info",
"text": [
"Source Listing Status: Active Under Contract",
"County: Los Angeles",
"Directions: S/238th, Cabrillo turns into Eshelman",
"Source Property Type: Residential",
"Area: 121 - Lomita",
"Source Neighborhood: 121 - Lomita",
"Parcel Number: 7374008019",
"Zoning: LOA1",
"Property Subtype: Single Family Residence",
"Source System Name: C2C"
]
},
{
"__typename": "HomeDetails",
"category": "Building and Construction",
"text": [
"Total Square Feet Living: 1002",
"Year Built: 1952",
"Common Walls: No Common Walls",
"Living Area Source: Assessor",
"Property Age: 71",
"Roof: Composition",
"Levels or Stories: One",
"Building Total Stories: 1",
"Structure Type: House",
"House Style: Traditional",
"Year Built Source: Assessor"
]
},
{
"__typename": "HomeDetails",
"category": "Utilities",
"text": [
"Sewer: Public Sewer",
"Water Source: Public"
]
}
],
"open_houses": null,
"tax_history": [
{
"__typename": "TaxHistory",
"tax": 1285,
"year": 2021,
"assessment": {
"__typename": "Assessment",
"building": 20985,
"land": 49577,
"total": 70562
}
},
{
"__typename": "TaxHistory",
"tax": 1290,
"year": 2020,
"assessment": {
"__typename": "Assessment",
"building": 20770,
"land": 49069,
"total": 69839
}
},
{
"__typename": "TaxHistory",
"tax": 1251,
"year": 2019,
"assessment": {
"__typename": "Assessment",
"building": 20363,
"land": 48107,
"total": 68470
}
},
{
"__typename": "TaxHistory",
"tax": 1206,
"year": 2018,
"assessment": {
"__typename": "Assessment",
"building": 19964,
"land": 47164,
"total": 67128
}
},
{
"__typename": "TaxHistory",
"tax": 1185,
"year": 2017,
"assessment": {
"__typename": "Assessment",
"building": 19573,
"land": 46240,
"total": 65813
}
},
{
"__typename": "TaxHistory",
"tax": 1148,
"year": 2016,
"assessment": {
"__typename": "Assessment",
"building": 19190,
"land": 45334,
"total": 64524
}
},
{
"__typename": "TaxHistory",
"tax": 1131,
"year": 2015,
"assessment": {
"__typename": "Assessment",
"building": 18902,
"land": 44654,
"total": 63556
}
},
{
"__typename": "TaxHistory",
"tax": 1140,
"year": 2014,
"assessment": {
"__typename": "Assessment",
"building": 18532,
"land": 43780,
"total": 62312
}
},
{
"__typename": "TaxHistory",
"tax": 1124,
"year": 2013,
"assessment": {
"__typename": "Assessment",
"building": 18449,
"land": 43583,
"total": 62032
}
},
{
"__typename": "TaxHistory",
"tax": 1124,
"year": 2012,
"assessment": {
"__typename": "Assessment",
"building": 18088,
"land": 42729,
"total": 60817
}
},
{
"__typename": "TaxHistory",
"tax": 1128,
"year": 2010,
"assessment": {
"__typename": "Assessment",
"building": 17734,
"land": 41892,
"total": 59626
}
},
{
"__typename": "TaxHistory",
"tax": 1077,
"year": 2009,
"assessment": {
"__typename": "Assessment",
"building": 17644,
"land": 41678,
"total": 59322
}
},
{
"__typename": "TaxHistory",
"tax": 1077,
"year": 2009,
"assessment": {
"__typename": "Assessment",
"building": 17602,
"land": 41579,
"total": 59181
}
},
{
"__typename": "TaxHistory",
"tax": 1031,
"year": 2008,
"assessment": {
"__typename": "Assessment",
"building": 17299,
"land": 40861,
"total": 58160
}
},
{
"__typename": "TaxHistory",
"tax": 989,
"year": 2007,
"assessment": {
"__typename": "Assessment",
"building": 16960,
"land": 40060,
"total": 57020
}
}
],
"location": {
"__typename": "HomeLocation",
"address": {
"__typename": "HomeAddress",
"line": "23833 Eshelman Ave",
"street_number": "23833",
"street_name": "Eshelman",
"street_suffix": "Ave",
"unit": null,
"city": "Lomita",
"state_code": "CA",
"postal_code": "90717",
"state": "California",
"coordinate": {
"__typename": "HomeCoordinate",
"lat": 33.807408,
"lon": -118.314834
}
},
"county": {
"__typename": "HomeCounty",
"fips_code": "06037"
},
"street_view_url": "",
"neighborhoods": [
{
"__typename": "Neighborhood",
"name": "South Bay",
"city": "Rancho Palos Verdes",
"level": "macro_neighborhood",
"geo_statistics": {
"__typename": "GeoStatistics",
"housing_market": {
"__typename": "HousingMarket",
"median_price_per_sqft": 647,
"median_sold_price": 1149000,
"median_listing_price": 1099500,
"median_days_on_market": 70
}
}
}
]
},
"branding": [
{
"__typename": "Branding",
"type": "Agent",
"photo": null,
"name": "Yang Kim",
"phone": null,
"slogan": null,
"accent_color": null,
"link": null
},
{
"__typename": "Branding",
"type": "Office",
"photo": "https://ap.rdcpix.com/1848524333/e1454adff1913196d7859446f5871a9co-c0s.jpg",
"name": "RE/MAX Tiffany Real Estate",
"phone": null,
"slogan": null,
"accent_color": null,
"link": null
}
],
"consumer_advertisers": [
{
"__typename": "ConsumerAdvertiser",
"advertiser_id": "41386",
"office_id": "41386",
"agent_id": "2796035",
"name": "Yang Kim",
"phone": null,
"type": "Agent",
"href": "/realestateagents/Yang-Kim_Lomita_CA_2796035",
"slogan": null,
"photo": {
"__typename": "Photo",
"href": null
},
"show_realtor_logo": false,
"hours": null
},
{
"__typename": "ConsumerAdvertiser",
"advertiser_id": "41386",
"office_id": "41386",
"agent_id": "2796035",
"name": "RE/MAX Tiffany Real Estate",
"phone": "(714) 763-2100",
"type": "Office",
"href": "http://WWW.REMAXTIFFANY.COM",
"slogan": null,
"photo": {
"__typename": "Photo",
"href": "https://ap.rdcpix.com/1848524333/e1454adff1913196d7859446f5871a9co-c0s.jpg"
},
"show_realtor_logo": false,
"hours": null
}
],
"advertisers": [
{
"__typename": "HomeAdvertiser",
"fulfillment_id": "2796035",
"name": "Yang Kim",
"type": "seller",
"team_name": null,
"email": "kim@kimyanggroup.com",
"href": "",
"state_license": "01087301",
"phones": [
{
"__typename": "AdvertiserPhone",
"number": "7144730777",
"type": "Office",
"ext": ""
}
],
"office": {
"__typename": "HomeAdvertiserOffice",
"fulfillment_id": "41386",
"name": "RE/MAX Tiffany Real Estate",
"href": "WWW.REMAXTIFFANY.COM",
"photo": {
"__typename": "Href",
"href": "https://ap.rdcpix.com/1848524333/e1454adff1913196d7859446f5871a9co-c0l.jpg"
},
"email": "kerry@remaxtiffany.com",
"phones": [
{
"__typename": "AdvertiserPhone",
"number": "7147632100",
"type": "Office",
"ext": ""
}
]
},
"broker": {
"__typename": "HomeAdvertiserBroker",
"fulfillment_id": "1448881",
"name": "RE/MAX Tiffany Real Estate"
},
"photo": {
"__typename": "Href",
"href": ""
}
}
],
"photo_count": 29,
"photos": [
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3572124089s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9994497895240784
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.8689211010932922
},
{
"__typename": "Tag",
"label": "road_view",
"probability": 0.8525242209434509
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.639562726020813
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.8509714007377625
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2066193013s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "living_room",
"probability": 1
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3075335472s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "dining_room",
"probability": 0.9984033703804016
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m228497703s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "bedroom",
"probability": 0.9999992847442627
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1223210716s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9974243640899658
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.7032907009124756
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.756537675857544
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9565697908401489
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2637641392s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9963498115539551
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.6188244223594666
},
{
"__typename": "Tag",
"label": "road_view",
"probability": 0.9122028350830078
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.5568990111351013
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9303740859031677
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3918324361s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9326592683792114
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.9406516551971436
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.9999346733093262
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2242969418s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "living_room",
"probability": 0.936913251876831
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3355201927s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "living_room",
"probability": 0.9057579040527344
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3893695847s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9976168870925903
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1188936887s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.8997591137886047
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m556922799s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9197533130645752
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m914164216s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "kitchen",
"probability": 0.9999939203262329
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2821379049s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9999774694442749
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1549496142s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9983880519866943
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2683507852s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9993430972099304
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m23608060s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9990492463111877
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m660305915s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "laundry_room",
"probability": 0.9157699942588806
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3967489597s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9975208640098572
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2113023675s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.5332360863685608
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2179973450s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9992864727973938
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1056681903s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9918557405471802
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3289554994s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9252669215202332
},
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9999853372573853
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.5019744634628296
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9117583632469177
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1529750447s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9936275482177734
},
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9997506737709045
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.6575929522514343
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.4805363714694977
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3993690761s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9933565258979797
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2841607180s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9960392713546753
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2202649248s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9950003027915955
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m541866187s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "porch",
"probability": 0.9651705622673035
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3125533267s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "porch",
"probability": 0.999210000038147
}
]
}
],
"property_history": [
{
"__typename": "HomePropertyHistory",
"date": "2023-01-12",
"event_name": "Listed",
"price": 699000,
"source_name": "CRMLS",
"listing": {
"__typename": "HomeListing",
"photos": [
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3572124089s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9994497895240784
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.8689211010932922
},
{
"__typename": "Tag",
"label": "road_view",
"probability": 0.8525242209434509
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.639562726020813
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.8509714007377625
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2066193013s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "living_room",
"probability": 1
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3075335472s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "dining_room",
"probability": 0.9984033703804016
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m228497703s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "bedroom",
"probability": 0.9999992847442627
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1223210716s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9974243640899658
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.7032907009124756
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.756537675857544
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9565697908401489
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2637641392s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9963498115539551
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.6188244223594666
},
{
"__typename": "Tag",
"label": "road_view",
"probability": 0.9122028350830078
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.5568990111351013
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9303740859031677
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3918324361s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9326592683792114
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.9406516551971436
},
{
"__typename": "Tag",
"label": "porch",
"probability": 0.9999346733093262
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2242969418s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "living_room",
"probability": 0.936913251876831
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3355201927s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "living_room",
"probability": 0.9057579040527344
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3893695847s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9976168870925903
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1188936887s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.8997591137886047
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m556922799s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9197533130645752
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m914164216s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "kitchen",
"probability": 0.9999939203262329
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2821379049s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9999774694442749
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1549496142s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9983880519866943
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2683507852s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9993430972099304
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m23608060s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9990492463111877
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m660305915s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "laundry_room",
"probability": 0.9157699942588806
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3967489597s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9975208640098572
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2113023675s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.5332360863685608
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2179973450s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9992864727973938
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1056681903s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9918557405471802
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3289554994s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9252669215202332
},
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9999853372573853
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.5019744634628296
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9117583632469177
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m1529750447s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.9936275482177734
},
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9997506737709045
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.6575929522514343
},
{
"__typename": "Tag",
"label": "house_view",
"probability": 0.4805363714694977
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3993690761s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9933565258979797
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2841607180s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "yard",
"probability": 0.9960392713546753
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m2202649248s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "unknown",
"probability": 0.9950003027915955
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m541866187s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "porch",
"probability": 0.9651705622673035
}
]
},
{
"__typename": "HomePhoto",
"href": "https://ap.rdcpix.com/66c129725e3e2eebf58b8c172c9c6cd2l-m3125533267s.jpg",
"type": "realtordotcom_mls_listing_image",
"tags": [
{
"__typename": "Tag",
"label": "porch",
"probability": 0.999210000038147
}
]
}
],
"description": {
"__typename": "HomeDescription",
"sqft": 1002
}
}
}
],
"local": {
"__typename": "Local",
"noise": {
"__typename": "Noise",
"score": 73,
"noise_categories": [
{
"__typename": "NoiseCategory",
"type": "airport",
"text": "Medium"
},
{
"__typename": "NoiseCategory",
"type": "traffic",
"text": "Medium"
},
{
"__typename": "NoiseCategory",
"type": "local",
"text": "Medium"
},
{
"__typename": "NoiseCategory",
"type": "score",
"text": "Medium"
}
]
},
"flood": {
"__typename": "Flood",
"flood_factor_score": 1,
"fema_zone": [
"X"
]
}
},
"last_sold_price": null,
"last_sold_date": null,
"estimates": {
"__typename": "HomeEstimates",
"current_values": [
{
"__typename": "LatestEstimate",
"source": {
"__typename": "EstimateSource",
"type": "corelogic",
"name": "CoreLogic®"
},
"estimate": 777500,
"estimate_high": 871300,
"estimate_low": 683700,
"date": "2023-01-12"
},
{
"__typename": "LatestEstimate",
"source": {
"__typename": "EstimateSource",
"type": "quantarium",
"name": "Quantarium"
},
"estimate": 721933,
"estimate_high": 844661,
"estimate_low": 599204,
"date": "2023-01-11"
},
{
"__typename": "LatestEstimate",
"source": {
"__typename": "EstimateSource",
"type": "collateral",
"name": "Collateral Analytics"
},
"estimate": 804000,
"estimate_high": 916600,
"estimate_low": 691400,
"date": "2022-12-14"
}
],
"historical_values": [
{
"__typename": "HistoricalEstimate",
"source": {
"__typename": "EstimateSource",
"type": "corelogic",
"name": "CoreLogic®"
},
"estimates": [
{
"__typename": "EstimateRecord",
"estimate": 777500,
"date": "2023-01-12"
},
{
"__typename": "EstimateRecord",
"estimate": 786800,
"date": "2022-12-27"
},
{
"__typename": "EstimateRecord",
"estimate": 778700,
"date": "2022-11-26"
},
{
"__typename": "EstimateRecord",
"estimate": 802300,
"date": "2022-10-25"
},
{
"__typename": "EstimateRecord",
"estimate": 840500,
"date": "2022-09-24"
},
{
"__typename": "EstimateRecord",
"estimate": 840700,
"date": "2022-08-30"
},
{
"__typename": "EstimateRecord",
"estimate": 858100,
"date": "2022-07-28"
},
{
"__typename": "EstimateRecord",
"estimate": 857900,
"date": "2022-06-26"
},
{
"__typename": "EstimateRecord",
"estimate": 859700,
"date": "2022-05-21"
},
{
"__typename": "EstimateRecord",
"estimate": 867800,
"date": "2022-04-29"
},
{
"__typename": "EstimateRecord",
"estimate": 827600,
"date": "2022-03-29"
},
{
"__typename": "EstimateRecord",
"estimate": 811400,
"date": "2022-02-18"
},
{
"__typename": "EstimateRecord",
"estimate": 783600,
"date": "2022-01-20"
},
{
"__typename": "EstimateRecord",
"estimate": 767100,
"date": "2021-12-30"
},
{
"__typename": "EstimateRecord",
"estimate": 713300,
"date": "2021-11-25"
},
{
"__typename": "EstimateRecord",
"estimate": 704700,
"date": "2021-10-25"
},
{
"__typename": "EstimateRecord",
"estimate": 717000,
"date": "2021-09-30"
},
{
"__typename": "EstimateRecord",
"estimate": 721600,
"date": "2021-08-30"
},
{
"__typename": "EstimateRecord",
"estimate": 698800,
"date": "2021-07-30"
},
{
"__typename": "EstimateRecord",
"estimate": 695600,
"date": "2021-06-29"
},
{
"__typename": "EstimateRecord",
"estimate": 675800,
"date": "2021-05-29"
},
{
"__typename": "EstimateRecord",
"estimate": 659500,
"date": "2021-04-29"
},
{
"__typename": "EstimateRecord",
"estimate": 637300,
"date": "2021-03-28"
},
{
"__typename": "EstimateRecord",
"estimate": 624100,
"date": "2021-02-24"
},
{
"__typename": "EstimateRecord",
"estimate": 673900,
"date": "2021-01-30"
},
{
"__typename": "EstimateRecord",
"estimate": 658200,
"date": "2020-12-30"
},
{
"__typename": "EstimateRecord",
"estimate": 634000,
"date": "2020-11-30"
},
{
"__typename": "EstimateRecord",
"estimate": 657700,
"date": "2020-10-31"
},
{
"__typename": "EstimateRecord",
"estimate": 624200,
"date": "2020-09-30"
},
{
"__typename": "EstimateRecord",
"estimate": 609300,
"date": "2020-08-31"
},
{
"__typename": "EstimateRecord",
"estimate": 605000,
"date": "2020-07-28"
},
{
"__typename": "EstimateRecord",
"estimate": 609500,
"date": "2020-06-26"
},
{
"__typename": "EstimateRecord",
"estimate": 619700,
"date": "2020-05-31"
},
{
"__typename": "EstimateRecord",
"estimate": 612900,
"date": "2020-04-24"
},
{
"__typename": "EstimateRecord",
"estimate": 608800,
"date": "2020-03-29"
},
{
"__typename": "EstimateRecord",
"estimate": 629400,
"date": "2020-02-22"
},
{
"__typename": "EstimateRecord",
"estimate": 612200,
"date": "2020-01-26"
},
{
"__typename": "EstimateRecord",
"estimate": 628900,
"date": "2019-12-31"
},
{
"__typename": "EstimateRecord",
"estimate": 578700,
"date": "2019-11-27"
},
{
"__typename": "EstimateRecord",
"estimate": 620600,
"date": "2019-10-31"
},
{
"__typename": "EstimateRecord",
"estimate": 568600,
"date": "2019-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 620200,
"date": "2019-08-25"
},
{
"__typename": "EstimateRecord",
"estimate": 623900,
"date": "2019-07-31"
},
{
"__typename": "EstimateRecord",
"estimate": 589900,
"date": "2019-06-27"
},
{
"__typename": "EstimateRecord",
"estimate": 627300,
"date": "2019-05-24"
},
{
"__typename": "EstimateRecord",
"estimate": 630100,
"date": "2019-04-29"
},
{
"__typename": "EstimateRecord",
"estimate": 603400,
"date": "2019-03-26"
},
{
"__typename": "EstimateRecord",
"estimate": 552100,
"date": "2019-02-03"
},
{
"__typename": "EstimateRecord",
"estimate": 629900,
"date": "2019-01-26"
},
{
"__typename": "EstimateRecord",
"estimate": 633900,
"date": "2018-12-24"
},
{
"__typename": "EstimateRecord",
"estimate": 611100,
"date": "2018-11-14"
},
{
"__typename": "EstimateRecord",
"estimate": 608600,
"date": "2018-10-28"
},
{
"__typename": "EstimateRecord",
"estimate": 521343,
"date": "2018-09-27"
},
{
"__typename": "EstimateRecord",
"estimate": 603000,
"date": "2018-08-23"
},
{
"__typename": "EstimateRecord",
"estimate": 597700,
"date": "2018-07-31"
},
{
"__typename": "EstimateRecord",
"estimate": 592900,
"date": "2018-06-29"
},
{
"__typename": "EstimateRecord",
"estimate": 576100,
"date": "2018-05-28"
},
{
"__typename": "EstimateRecord",
"estimate": 580700,
"date": "2018-04-27"
},
{
"__typename": "EstimateRecord",
"estimate": 569200,
"date": "2018-03-11"
},
{
"__typename": "EstimateRecord",
"estimate": 584000,
"date": "2018-02-24"
},
{
"__typename": "EstimateRecord",
"estimate": 456888,
"date": "2018-01-25"
},
{
"__typename": "EstimateRecord",
"estimate": 626700,
"date": "2017-12-08"
},
{
"__typename": "EstimateRecord",
"estimate": 613200,
"date": "2017-11-23"
},
{
"__typename": "EstimateRecord",
"estimate": 568700,
"date": "2017-10-25"
},
{
"__typename": "EstimateRecord",
"estimate": 571800,
"date": "2017-09-23"
},
{
"__typename": "EstimateRecord",
"estimate": 574700,
"date": "2017-08-29"
},
{
"__typename": "EstimateRecord",
"estimate": 542500,
"date": "2017-07-27"
},
{
"__typename": "EstimateRecord",
"estimate": 535500,
"date": "2017-06-26"
},
{
"__typename": "EstimateRecord",
"estimate": 492400,
"date": "2017-05-25"
},
{
"__typename": "EstimateRecord",
"estimate": 532900,
"date": "2017-04-24"
},
{
"__typename": "EstimateRecord",
"estimate": 523300,
"date": "2017-03-26"
},
{
"__typename": "EstimateRecord",
"estimate": 529300,
"date": "2017-02-25"
},
{
"__typename": "EstimateRecord",
"estimate": 518100,
"date": "2017-01-27"
},
{
"__typename": "EstimateRecord",
"estimate": 524000,
"date": "2016-12-13"
},
{
"__typename": "EstimateRecord",
"estimate": 510500,
"date": "2016-11-27"
},
{
"__typename": "EstimateRecord",
"estimate": 499500,
"date": "2016-10-24"
},
{
"__typename": "EstimateRecord",
"estimate": 488300,
"date": "2016-09-30"
},
{
"__typename": "EstimateRecord",
"estimate": 503700,
"date": "2016-08-29"
},
{
"__typename": "EstimateRecord",
"estimate": 487600,
"date": "2016-07-12"
},
{
"__typename": "EstimateRecord",
"estimate": 506100,
"date": "2016-06-27"
},
{
"__typename": "EstimateRecord",
"estimate": 501200,
"date": "2016-05-27"
},
{
"__typename": "EstimateRecord",
"estimate": 497200,
"date": "2016-04-27"
},
{
"__typename": "EstimateRecord",
"estimate": 473100,
"date": "2016-03-28"
},
{
"__typename": "EstimateRecord",
"estimate": 483900,
"date": "2016-02-26"
},
{
"__typename": "EstimateRecord",
"estimate": 477900,
"date": "2016-01-26"
},
{
"__typename": "EstimateRecord",
"estimate": 476400,
"date": "2015-12-27"
},
{
"__typename": "EstimateRecord",
"estimate": 479800,
"date": "2015-11-27"
},
{
"__typename": "EstimateRecord",
"estimate": 445000,
"date": "2015-10-29"
},
{
"__typename": "EstimateRecord",
"estimate": 435100,
"date": "2015-09-29"
},
{
"__typename": "EstimateRecord",
"estimate": 417500,
"date": "2015-08-31"
},
{
"__typename": "EstimateRecord",
"estimate": 439700,
"date": "2015-07-29"
},
{
"__typename": "EstimateRecord",
"estimate": 429500,
"date": "2015-06-30"
},
{
"__typename": "EstimateRecord",
"estimate": 421700,
"date": "2015-05-27"
},
{
"__typename": "EstimateRecord",
"estimate": 439400,
"date": "2015-04-26"
},
{
"__typename": "EstimateRecord",
"estimate": 426200,
"date": "2015-03-28"
},
{
"__typename": "EstimateRecord",
"estimate": 418000,
"date": "2015-02-22"
},
{
"__typename": "EstimateRecord",
"estimate": 414200,
"date": "2015-01-26"
},
{
"__typename": "EstimateRecord",
"estimate": 422500,
"date": "2014-12-31"
},
{
"__typename": "EstimateRecord",
"estimate": 437200,
"date": "2014-11-28"
},
{
"__typename": "EstimateRecord",
"estimate": 446700,
"date": "2014-10-27"
},
{
"__typename": "EstimateRecord",
"estimate": 449900,
"date": "2014-09-22"
},
{
"__typename": "EstimateRecord",
"estimate": 454900,
"date": "2014-08-26"
},
{
"__typename": "EstimateRecord",
"estimate": 466900,
"date": "2014-07-25"
},
{
"__typename": "EstimateRecord",
"estimate": 444100,
"date": "2014-06-30"
},
{
"__typename": "EstimateRecord",
"estimate": 436600,
"date": "2014-05-28"
},
{
"__typename": "EstimateRecord",
"estimate": 423300,
"date": "2014-04-28"
},
{
"__typename": "EstimateRecord",
"estimate": 437100,
"date": "2014-03-30"
},
{
"__typename": "EstimateRecord",
"estimate": 406000,
"date": "2014-01-31"
},
{
"__typename": "EstimateRecord",
"estimate": 410500,
"date": "2013-12-28"
},
{
"__typename": "EstimateRecord",
"estimate": 418000,
"date": "2013-11-30"
},
{
"__typename": "EstimateRecord",
"estimate": 410600,
"date": "2013-10-28"
},
{
"__typename": "EstimateRecord",
"estimate": 428200,
"date": "2013-09-28"
},
{
"__typename": "EstimateRecord",
"estimate": 382600,
"date": "2013-08-28"
},
{
"__typename": "EstimateRecord",
"estimate": 402300,
"date": "2013-07-26"
},
{
"__typename": "EstimateRecord",
"estimate": 390700,
"date": "2013-06-25"
},
{
"__typename": "EstimateRecord",
"estimate": 378800,
"date": "2013-05-31"
}
]
},
{
"__typename": "HistoricalEstimate",
"source": {
"__typename": "EstimateSource",
"type": "quantarium",
"name": "Quantarium"
},
"estimates": [
{
"__typename": "EstimateRecord",
"estimate": 721933,
"date": "2023-01-11"
},
{
"__typename": "EstimateRecord",
"estimate": 727544,
"date": "2022-12-28"
},
{
"__typename": "EstimateRecord",
"estimate": 742906,
"date": "2022-11-30"
},
{
"__typename": "EstimateRecord",
"estimate": 755631,
"date": "2022-10-26"
},
{
"__typename": "EstimateRecord",
"estimate": 700945,
"date": "2022-09-28"
},
{
"__typename": "EstimateRecord",
"estimate": 726453,
"date": "2022-08-31"
},
{
"__typename": "EstimateRecord",
"estimate": 761933,
"date": "2022-07-27"
},
{
"__typename": "EstimateRecord",
"estimate": 756411,
"date": "2022-06-29"
},
{
"__typename": "EstimateRecord",
"estimate": 794507,
"date": "2022-05-25"
},
{
"__typename": "EstimateRecord",
"estimate": 783202,
"date": "2022-04-27"
},
{
"__typename": "EstimateRecord",
"estimate": 773824,
"date": "2022-03-30"
},
{
"__typename": "EstimateRecord",
"estimate": 659211,
"date": "2022-02-23"
},
{
"__typename": "EstimateRecord",
"estimate": 619142,
"date": "2022-01-26"
},
{
"__typename": "EstimateRecord",
"estimate": 649678,
"date": "2021-12-29"
},
{
"__typename": "EstimateRecord",
"estimate": 610837,
"date": "2021-11-10"
},
{
"__typename": "EstimateRecord",
"estimate": 676641,
"date": "2021-10-20"
},
{
"__typename": "EstimateRecord",
"estimate": 676641,
"date": "2021-09-29"
},
{
"__typename": "EstimateRecord",
"estimate": 693987,
"date": "2021-08-25"
},
{
"__typename": "EstimateRecord",
"estimate": 623118,
"date": "2021-07-28"
},
{
"__typename": "EstimateRecord",
"estimate": 598490,
"date": "2021-06-30"
},
{
"__typename": "EstimateRecord",
"estimate": 626463,
"date": "2021-05-26"
},
{
"__typename": "EstimateRecord",
"estimate": 672248,
"date": "2021-04-28"
},
{
"__typename": "EstimateRecord",
"estimate": 648672,
"date": "2021-03-03"
},
{
"__typename": "EstimateRecord",
"estimate": 648672,
"date": "2021-02-24"
},
{
"__typename": "EstimateRecord",
"estimate": 641184,
"date": "2021-01-27"
},
{
"__typename": "EstimateRecord",
"estimate": 640323,
"date": "2020-12-30"
},
{
"__typename": "EstimateRecord",
"estimate": 621256,
"date": "2020-11-25"
},
{
"__typename": "EstimateRecord",
"estimate": 615890,
"date": "2020-10-28"
},
{
"__typename": "EstimateRecord",
"estimate": 621790,
"date": "2020-09-30"
},
{
"__typename": "EstimateRecord",
"estimate": 619450,
"date": "2020-08-26"
},
{
"__typename": "EstimateRecord",
"estimate": 631045,
"date": "2020-07-29"
},
{
"__typename": "EstimateRecord",
"estimate": 614736,
"date": "2020-06-24"
},
{
"__typename": "EstimateRecord",
"estimate": 601053,
"date": "2020-05-27"
},
{
"__typename": "EstimateRecord",
"estimate": 585355,
"date": "2020-04-29"
},
{
"__typename": "EstimateRecord",
"estimate": 540361,
"date": "2020-03-11"
},
{
"__typename": "EstimateRecord",
"estimate": 540361,
"date": "2020-02-26"
},
{
"__typename": "EstimateRecord",
"estimate": 642765,
"date": "2020-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 650686,
"date": "2019-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 648609,
"date": "2019-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 626234,
"date": "2019-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 615246,
"date": "2019-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 615134,
"date": "2019-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 602962,
"date": "2019-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 587855,
"date": "2019-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 585110,
"date": "2019-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 563541,
"date": "2019-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 560922,
"date": "2019-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 567735,
"date": "2019-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 587055,
"date": "2019-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 614813,
"date": "2018-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 612770,
"date": "2018-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 613007,
"date": "2018-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 591440,
"date": "2018-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 616828,
"date": "2018-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 597681,
"date": "2018-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 572699,
"date": "2018-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 558528,
"date": "2018-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 558057,
"date": "2018-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 573554,
"date": "2018-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 576988,
"date": "2018-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 603985,
"date": "2018-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 614548,
"date": "2017-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 605915,
"date": "2017-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 602081,
"date": "2017-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 595604,
"date": "2017-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 593960,
"date": "2017-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 579138,
"date": "2017-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 573392,
"date": "2017-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 587997,
"date": "2017-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 565260,
"date": "2017-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 574665,
"date": "2017-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 572244,
"date": "2017-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 533610,
"date": "2017-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 521828,
"date": "2016-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 516424,
"date": "2016-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 511856,
"date": "2016-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 511855,
"date": "2016-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 529375,
"date": "2016-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 505993,
"date": "2016-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 497303,
"date": "2016-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 517304,
"date": "2016-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 513907,
"date": "2016-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 511271,
"date": "2016-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 512188,
"date": "2016-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 510451,
"date": "2016-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 456162,
"date": "2015-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 453116,
"date": "2015-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 440657,
"date": "2015-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 439714,
"date": "2015-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 435821,
"date": "2015-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 431470,
"date": "2015-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 444464,
"date": "2015-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 439564,
"date": "2015-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 435714,
"date": "2015-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 435749,
"date": "2015-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 430774,
"date": "2015-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 429221,
"date": "2015-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 435787,
"date": "2014-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 436897,
"date": "2014-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 435984,
"date": "2014-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 435199,
"date": "2014-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 430146,
"date": "2014-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 427065,
"date": "2014-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 424266,
"date": "2014-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 423074,
"date": "2014-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 420881,
"date": "2014-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 417339,
"date": "2014-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 416154,
"date": "2014-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 414701,
"date": "2014-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 417884,
"date": "2013-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 417025,
"date": "2013-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 415634,
"date": "2013-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 409413,
"date": "2013-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 406459,
"date": "2013-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 402492,
"date": "2013-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 390002,
"date": "2013-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 368863,
"date": "2013-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 364726,
"date": "2013-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 359967,
"date": "2013-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 351648,
"date": "2013-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 348734,
"date": "2013-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 344682,
"date": "2012-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 343221,
"date": "2012-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 343239,
"date": "2012-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 341338,
"date": "2012-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 338451,
"date": "2012-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 331766,
"date": "2012-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 333772,
"date": "2012-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 333653,
"date": "2012-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 331610,
"date": "2012-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 328883,
"date": "2012-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 324867,
"date": "2012-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 326766,
"date": "2012-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 325952,
"date": "2011-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 323412,
"date": "2011-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 321697,
"date": "2011-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 322530,
"date": "2011-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 326075,
"date": "2011-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 327561,
"date": "2011-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 332556,
"date": "2011-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 339405,
"date": "2011-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 348502,
"date": "2011-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 352816,
"date": "2011-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 357149,
"date": "2011-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 357899,
"date": "2011-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 356467,
"date": "2010-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 356055,
"date": "2010-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 356348,
"date": "2010-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 355993,
"date": "2010-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 358010,
"date": "2010-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 358871,
"date": "2010-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 360071,
"date": "2010-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 358705,
"date": "2010-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 359419,
"date": "2010-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 363880,
"date": "2010-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 365713,
"date": "2010-02-01"
}
]
},
{
"__typename": "HistoricalEstimate",
"source": {
"__typename": "EstimateSource",
"type": "collateral",
"name": "Collateral Analytics"
},
"estimates": [
{
"__typename": "EstimateRecord",
"estimate": 804000,
"date": "2022-12-14"
},
{
"__typename": "EstimateRecord",
"estimate": 886000,
"date": "2022-11-14"
},
{
"__typename": "EstimateRecord",
"estimate": 873000,
"date": "2022-10-14"
},
{
"__typename": "EstimateRecord",
"estimate": 914000,
"date": "2022-09-14"
},
{
"__typename": "EstimateRecord",
"estimate": 991000,
"date": "2022-08-15"
},
{
"__typename": "EstimateRecord",
"estimate": 880000,
"date": "2022-07-14"
},
{
"__typename": "EstimateRecord",
"estimate": 862000,
"date": "2022-06-14"
},
{
"__typename": "EstimateRecord",
"estimate": 832000,
"date": "2022-05-14"
},
{
"__typename": "EstimateRecord",
"estimate": 756000,
"date": "2022-04-14"
},
{
"__typename": "EstimateRecord",
"estimate": 946000,
"date": "2022-03-14"
},
{
"__typename": "EstimateRecord",
"estimate": 860000,
"date": "2022-02-14"
},
{
"__typename": "EstimateRecord",
"estimate": 889000,
"date": "2022-01-14"
},
{
"__typename": "EstimateRecord",
"estimate": 882000,
"date": "2021-12-14"
},
{
"__typename": "EstimateRecord",
"estimate": 783000,
"date": "2021-11-14"
},
{
"__typename": "EstimateRecord",
"estimate": 791000,
"date": "2021-10-18"
},
{
"__typename": "EstimateRecord",
"estimate": 636000,
"date": "2021-09-14"
},
{
"__typename": "EstimateRecord",
"estimate": 643000,
"date": "2021-08-14"
},
{
"__typename": "EstimateRecord",
"estimate": 714000,
"date": "2021-07-14"
},
{
"__typename": "EstimateRecord",
"estimate": 895000,
"date": "2021-06-14"
},
{
"__typename": "EstimateRecord",
"estimate": 814000,
"date": "2021-05-14"
},
{
"__typename": "EstimateRecord",
"estimate": 785000,
"date": "2021-04-14"
},
{
"__typename": "EstimateRecord",
"estimate": 727000,
"date": "2021-03-14"
},
{
"__typename": "EstimateRecord",
"estimate": 661000,
"date": "2021-02-14"
},
{
"__typename": "EstimateRecord",
"estimate": 687000,
"date": "2021-01-14"
},
{
"__typename": "EstimateRecord",
"estimate": 763000,
"date": "2020-12-14"
},
{
"__typename": "EstimateRecord",
"estimate": 736000,
"date": "2020-11-14"
},
{
"__typename": "EstimateRecord",
"estimate": 669000,
"date": "2020-10-14"
},
{
"__typename": "EstimateRecord",
"estimate": 668000,
"date": "2020-09-14"
},
{
"__typename": "EstimateRecord",
"estimate": 661000,
"date": "2020-08-14"
},
{
"__typename": "EstimateRecord",
"estimate": 601000,
"date": "2020-07-14"
}
]
}
],
"forecast_values": [
{
"__typename": "ForecastEstimate",
"source": {
"__typename": "EstimateSource",
"type": "corelogic",
"name": "CoreLogic®"
},
"estimates": [
{
"__typename": "EstimateRecord",
"estimate": 774320,
"date": "2023-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 772811,
"date": "2023-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 774152,
"date": "2023-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 778028,
"date": "2023-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 783634,
"date": "2023-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 788153,
"date": "2023-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 790960,
"date": "2023-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 792083,
"date": "2023-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 791817,
"date": "2023-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 790715,
"date": "2023-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 788839,
"date": "2023-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 786977,
"date": "2024-01-01"
}
]
},
{
"__typename": "ForecastEstimate",
"source": {
"__typename": "EstimateSource",
"type": "quantarium",
"name": "Quantarium"
},
"estimates": [
{
"__typename": "EstimateRecord",
"estimate": 719290,
"date": "2023-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 717741,
"date": "2023-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716863,
"date": "2023-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716397,
"date": "2023-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716183,
"date": "2023-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716123,
"date": "2023-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716157,
"date": "2023-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716249,
"date": "2023-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716375,
"date": "2023-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716522,
"date": "2023-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716679,
"date": "2023-12-01"
},
{
"__typename": "EstimateRecord",
"estimate": 716844,
"date": "2024-01-01"
}
]
},
{
"__typename": "ForecastEstimate",
"source": {
"__typename": "EstimateSource",
"type": "collateral",
"name": "Collateral Analytics"
},
"estimates": [
{
"__typename": "EstimateRecord",
"estimate": 805170,
"date": "2023-01-01"
},
{
"__typename": "EstimateRecord",
"estimate": 806369,
"date": "2023-02-01"
},
{
"__typename": "EstimateRecord",
"estimate": 807568,
"date": "2023-03-01"
},
{
"__typename": "EstimateRecord",
"estimate": 808767,
"date": "2023-04-01"
},
{
"__typename": "EstimateRecord",
"estimate": 809893,
"date": "2023-05-01"
},
{
"__typename": "EstimateRecord",
"estimate": 811018,
"date": "2023-06-01"
},
{
"__typename": "EstimateRecord",
"estimate": 812143,
"date": "2023-07-01"
},
{
"__typename": "EstimateRecord",
"estimate": 813293,
"date": "2023-08-01"
},
{
"__typename": "EstimateRecord",
"estimate": 814444,
"date": "2023-09-01"
},
{
"__typename": "EstimateRecord",
"estimate": 815594,
"date": "2023-10-01"
},
{
"__typename": "EstimateRecord",
"estimate": 816728,
"date": "2023-11-01"
},
{
"__typename": "EstimateRecord",
"estimate": 817861,
"date": "2023-12-01"
}
]
}
]
},
"virtual_tours": null,
"videos": null,
"matterport": null,
"terms": null,
"monthly_fees": null,
"one_time_fees": null,
"units": null
}
}


export default function Details({ route }) {


    const { item } = route.params
    const [liked, setLiked] = useState(false)


    const likedStore = useSelector((state) => state.liked)
    const dispatch = useDispatch()
    const isIncluded = likedStore.includes(JSON.stringify(item)) //checks if item is already in array in store
    const fullResImg =houseDetail.home.photos[0].href.slice(0, -5) + "od.jpg"

   // const [houseDetail, setHouseDetail] = useState(null)
  //  const [fullResImg, setFullResImg] = useState(null)


//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await getDetails(item.property_id);
//                 const data = response.data

//                 console.log( 'this is what i need to check')
//                 setHouseDetail(data.data);
//                 setFullResImg(data.data.home.photos[0].href.slice(0, -5) + "od.jpg")
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         fetchData();
//         return () => {
// setHouseDetail(null)
//         }
//     }, [])





    if (!houseDetail) {
        return <Text>Loading</Text>
    }
    return (

        <ScrollView style={{ flex: 1 }}>
            <Image style={styles.cardImage} source={{ uri: fullResImg }} />
            <View style={styles.infoWrapper}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.homeType}>{houseDetail.home.__typename}</Text>
                    <Button
                        onPress={() => {
                            setLiked(!liked)
                            console.log('this is ', liked);
                            dispatch(updateLiked(item))
                        }}
                        type='clear'
                        icon={
                            <Icon size={FONT_SIZES.Sub_HEADER} style={styles.locationIcon} name={isIncluded ? 'heart-fill' : 'heart'} type='octicon' color={isIncluded ? COLORS.RED : 'black'} />

                        } />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Text style={styles.price} >{usdFormat(houseDetail.home.list_price)}</Text>
                    <Text style={styles.price} >{usdFormat(houseDetail.home.mortgage.estimate.monthly_payment)}/m</Text>
                    {houseDetail.home.priceReduction &&

                        <View style={{ flexDirection: 'row' }}>
                            <Icon

                                name='arrow-down'
                                type='font-awesome-5'
                                size={FONT_SIZES.CAPTION}
                                color={COLORS.GREEN}
                            />
                            <Text style={styles.reduction}>{houseDetail.home.priceReduction}</Text>
                        </View>
                    }
                </View>
                <Text style={styles.address}>{houseDetail.home.location.address.line} {houseDetail.home.location.address.city}, {houseDetail.home.location.address.state_code} </Text>
                <View style={{ flexDirection: 'row', justifyContent:'space-around', alignItems:'center'}}>
                    <View style={styles.statsWrapper}>
                        <Icon
                            name='bed'
                            type='font-awesome-5'
                            size={12}
                        />
                        <Text style={styles.stats}> {houseDetail.home.description.beds}</Text>

                    </View>
                    <View style={styles.statsWrapper}>
                        <Icon

                            name='sink'
                            type='font-awesome-5'
                            size={12}
                        />
                        <Text style={styles.stats}> {houseDetail.home.description.baths}</Text>
                    </View>
                    <View style={styles.statsWrapper}>
                        <Icon

                            name='ruler-combined'
                            type='font-awesome-5'
                            size={12}
                        />
                        <Text style={styles.stats} > {Math.floor(houseDetail.home.description.sqft)} sqft</Text>
                    </View>
                </View>
<Text>{houseDetail.home.description.text}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        width: '100%', height: undefined, aspectRatio: 1
    },
    infoWrapper: {
        margin: 15,
    },
    homeType: {
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZES.BODY,
        fontWeight: FONT_WEIGHTS.BOLD
    },
    price: {
        color: COLORS.DARK_GREY,
        fontSize: FONT_SIZES.SUB_HEADER,
        fontWeight: FONT_WEIGHTS.BOLD
    },
    address: {
        color: COLORS.LIGHT_GREY,
        fontSize: FONT_SIZES.BODY
    },
    reduction: {
        color: COLORS.GREEN,
        fontSize: FONT_SIZES.SMALL,
        fontWeight: FONT_WEIGHTS.BOLD
    },
    statsWrapper: {
        flexDirection: 'row'
    },
    stats: {
        color: COLORS.DARK_GREY,
        fontSize: FONT_SIZES.BODY

    }
})
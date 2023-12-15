---
title: With Luce Carter
id: "005"
date: "2023-12-14"
publishdate: "2023-12-14"
image: 
  urlPath: "images/5.jpeg"
  alt: "A portrait photograph of Luce Carter."
card: "image"
comments: false
summary: This edition features guest Luce Carter. Luce talks about how she uses AI to help in apps that help her with day-to-day activities. Includes suggestions for the latest blogs to read, podcasts to listen to and videos to watch.
type: newsletter
twImage: "images/5.jpeg"
twitter:
  card: summary_large_image
  site: "@LaylaCodesIt"
  image: "/images/5.jpg" 

---


## Welcome back 👋
It has been a busy couple of months, both for me personally and for .NET!

We had the launch of .NET 8 and the very interesting [.NET Aspire](https://devblogs.microsoft.com/dotnet/introducing-dotnet-aspire-simplifying-cloud-native-development-with-dotnet-8/), which I'm very excited about. I even made a [YouTube video](https://youtu.be/J02mvcEKrsI) about it, so make sure you go and watch that!

Personally, my employer, VMware was acquired by Broadcom which has left me with a lot of uncertainty about my ongoing employment. I won't find out one way or another until February 5th which feels like forever away.

I've finished travel for the year, so I'm enjoying some time at home. I re-vamped my [personal site](https://layla.dev) and I've moved this newsletter to be hosted on it.

This edition of the newsletter features my good friend, Luce Carter.

Luce is a proudly neurodiverse Microsoft MVP and Developer Advocate for MongoDB, based in Manchester, England.

When not writing code for fun in her spare time or writing a technical book, she speaks around the world at user groups and conferences on MongoDB, .NET, Mental Health and Productivity, creates YouTube videos, streams on Twitch occasionally and writes on her blog. Follow Luce on Twitter [@LuceCarter1](https://twitter.com/lucecater1) and also her Blog at [lucecarter.co.uk](https://lucecarter.co.uk).


## Luce's thoughts
AI and specifically tools like GitHub Copilot and ChatGPT have become hot topics this year. A lot of the discussions tend to be around licensing, privacy, replacing jobs and all the negative impacts it can have. This isn’t intended to be a provocative feature of the newsletter or even political. But I wanted to take a minute to discuss the positive impact these tools have had on me this year for a reason you may not necessarily consider; neurodiversity.

I was diagnosed as neurodivergent when I was a child. Specifically, Dyspraxia. Asperger’s was mentioned but not officially diagnosed. Then in July 2021, after a 4.5 year wait on the NHS waiting list, I was diagnosed with combined-type ADHD (and again Asperger’s came up but couldn’t be officially written down, ugh!) I never saw myself as hyperactive but turns out it can be internal as well, who knew!

Anyway, I was tried on medication but nothing worked. I appear to be in the 1% who are treatment resistant. So I have had to find ways to cope with my various neurodivergent conditions and how it impacts my life. 

In comes AI. Now I’m not saying it has solved my life. But there are a surprising number of tools out there that use AI in some way that have made my life easier and I wanted to take a moment to discuss some of them in case it can help you, neurodivergent or not!

ChatGPT - The probably most well known. I often use this for helping me organise my thoughts, cure writer's block or get quick code advice for topics I’m not so clued up on. Of course the data it is trained on has a cut off point in time so it’s not suitable for every scenario. But often breaking things down/problem solving issues is what causes focus issues so having this tool at hand to help break those barriers is fantastic.

GitHub Copilot/Cody - These are two different and competing tools but they do the same thing. Copilot is the most well known but as you can read from an article I will share below, Cody has actually been found to be more thorough with enough context, and in my own real world tests I have found the same thing. I can use it to tell me how to achieve something specific, speed up coding, explain code or even generate tests. As someone who works creating content all day every day on technical topics involving the wonderful MongoDB developer data platform in conjunction with different languages and frameworks (of which I have a ranging level of experience), these assistants are wonderful.

Pipedream/OpenAI with Notion - This isn’t specifically a product but more a workflow. I’m a big fan of Notion. I have given talks on how I use Notion to manage my life and knowledge. But Notion expert and productivity legend Thomas Frank released a blog post this year that changed my life. A workflow using the automation service Pipedream in conjunction with OpenAI that will take an audio file uploaded to a cloud storage service (I use Google Drive), generate a transcript, summarise the points and output to a page on my Notion. 

Why? 

So I can brain dump all the things my ADHD brain comes up with, usually when I am walking somewhere and have it at least semi made into something usable. What makes this even better is I have an Apple Shortcut setup that records a voice memo and uploads it to the same Google Drive the workflow looks at, and then the shortcut can be triggered from my Action button on my iPhone 15 Pro, so I can quickly and easily get my thoughts out.

These all have one thing in common, reducing the friction to my productivity by helping to address barriers that are like steroids to my lack of focus.

Feel free to reach out to me on Twitter if you have any stories about how AI has helped you, or even to share your own AI hacks that I might enjoy!

### Luce's recommendations

- As a Microsoft MVP, I have been lucky to be exposed to Copilot from early on, but [this article](https://about.sourcegraph.com/blog/copilot-vs-cody-why-context-matters-for-code-ai) from my friend Ado Kukic on Cody, an alternative from Sourcegraph, really got me thinking about the impact of context with AI. 
- The [tutorial](https://thomasjfrank.com/how-to-transcribe-audio-to-text-with-chatgpt-and-notion/) I mentioned earlier on how to automate audio into Notion.
- Entity Framework has been around for a while and whenever MongoDB is discussed, people ask me about EF Core support. Well we now have a driver in preview and I am proud of [this tutorial](https://www.mongodb.com/developer/languages/csharp/crud-changetracking-mongodb-provider-for-efcore/) I wrote showing how to use it in an ASP.NET Core MVC app. 

## What's new and exciting?
- [.NET Conf 2023 Recap – Celebrating Community, Innovation, and the Launch of .NET 8](https://devblogs.microsoft.com/dotnet/dotnet-conf-2023-recap-videos-slides-demos-and-more/) - if you missed out on .NET Conf last month, then this recap is a good place for you to get all caught up!
- [Debugging Enhancements in .NET 8](https://devblogs.microsoft.com/dotnet/debugging-enhancements-in-dotnet-8/) - debugging is oftentimes overlooked, so go check out all the cool new improvements in .NET 8.
- [What’s new with identity in .NET 8](https://devblogs.microsoft.com/dotnet/whats-new-with-identity-in-dotnet-8) - ahhh, identity, that old chestnut. Jeremy Likness tells us what's new with our favourite topic, Identity, in .NET 8.


## What to read 📖
[ConfigureAwait in .NET 8](https://blog.stephencleary.com/2023/11/configureawait-in-net-8.html) - MVP Stephen Cleary gives us a good overview of `ConfigueAwait` and how it's changed in .NET 8. He covers some common misconceptions too.

[10 Years of Building Akka.NET](https://petabridge.com/blog/10-years-of-akkadotnet) - Aaron Stannard shares his experiences in the 10 years since creating AKKA.NET

[Exploring An Example Vertical Slice Architecture In ASP.NET Core – What You Need To Know
](https://www.devleader.ca/2023/12/07/exploring-an-example-vertical-slice-architecture-in-asp-net-core-what-you-need-to-know/) - in this in-depth article, Nick Cosentino goes into everything you need to know about vertical slice architecture.


## What to listen to 🗣
[Polly V8 with Joel Hulen and Martin Costello](https://www.dotnetrocks.com/details/1875) - I'm a big fan of Polly, and in this episode of .NET Rocks, Carl and Richard chat with two of the Polly project maintainer, Joel Hulen and Martin Costello, about the latest release.

[Uncovering Advanced .NET Front-end Development: Blazor, Micro Frontends, and AngleSharp](https://topenddevs.com/podcasts/adventures-in-net/episodes/uncovering-advanced-net-front-end-development-blazor-micro-frontends-and-anglesharp-net-167) - The _Adventures in .NET_ hosts are joined by Florian Rappl.


## What to watch 📺
[The .NET Conf 2023 Playlist!](https://youtube.com/playlist?list=PLdo4fOcmZ0oULyHSPBx-tQzePOYlhvrAU&si=2lPIiL1lnrB81IXv)


## Before you go 👋

We do hope you’ve enjoyed the articles, videos, and podcasts we’ve shared with you. If you have an article you’d like us to include in the newsletter, then please complete this [form](https://forms.gle/WJM3F7STnSiVdysy5).

If you have any comments or suggestions or just want to reach out, please complete this [contact form](https://forms.gle/TNMj6mMtUxDFXP8v6)  to reach me, Layla.

Lastly, don’t forget to subscribe to the newsletter and share it with your friends!

Thanks for reading!

Layla.


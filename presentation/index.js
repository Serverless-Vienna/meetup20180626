// Import React
import React from 'react';

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, Fill, Layout, Image, Notes, Fit } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('../assets/serverless.css');

const theme = createTheme(
  {
    primary: '#cfc9cb',
    textColor: 'white',
    headingColor: 'black'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const images = {
  stockwerk: require('../assets/stockwerk.png'),
  aws1: require('../assets/awsconsole1.jpg'),
  aws2: require('../assets/awsconsole2.png'),
  aws3: require('../assets/awsconsole3.jpg'),
  aws4: require('../assets/awsconsole4.jpg'),
  cloud_revenues_2017: require('../assets/cloud-revenues-2017.jpg'),
  cloud_revenues_Q42017: require('../assets/cloud-revenues-Q42017.jpg'),
  market_share_Q42017: require('../assets/market-share-Q42017.png'),
  cncf_members: require('../assets/cncf_members.jpg'),
  cncf_landscape: require('../assets/CloudNativeLandscape_latest.png'),
  cncf_landscape_serverless: require('../assets/CloudNativeLandscape_Serverless_latest.png')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="headingColor">
            Serverless<br />Summer Slam<br />2018-06-26
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} fit caps lineHeight={1} textColor="headingColor">
            Agenda
          </Heading>
          <List>
            <ListItem className="margin-bottom-20"><span style={{ color: "white" }}>Adnan Rahić</span> Serverless &lt;3 Node.js - "A Love Story"</ListItem>
            <ListItem className="margin-bottom-20"><span style={{ color: "white" }}>Maximilian Jerg</span> FN Project - CI/CD on the Open Source Container-Native Serverless Plattform FN</ListItem>
            <ListItem><span style={{ color: "white" }}>Gerald</span> Cloud/Serverless News</ListItem>
            <ListItem className="margin-bottom-20"><span style={{ color: "white" }}>Christoph Wille</span> Reactive Programming with Event Grid - Going Serverless all the Way</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']}>
          <Heading size={1} textColor="headingColor">
            Sponsors
          </Heading>
          <Image src={images.stockwerk.replace('/', '')} width="100%" />
          <p>Awesome co-working space</p>
        </Slide>


        <Slide transition={['slide']} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="headingColor">
            Serverless &lt;3 Node.js
          </Heading>
          <Heading size={6} caps lineHeight={2} textColor="headingColor">
            "A Love Story"
          </Heading>
          <p>
            Adnan Rahić
          </p>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="headingColor">
            FN Project
          </Heading>
          <Heading size={6} caps lineHeight={2} textColor="headingColor">
            CI/CD on the Open Source Container-Native Serverless Plattform FN
          </Heading>
          <p>Maximilian Jerg</p>
        </Slide>


        <Slide transition={['slide']} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="headingColor">
            News Block
          </Heading>
          <p>Gerald</p>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="headingColor">
            Reactive Programming with Event Grid
          </Heading>
          <Heading size={6} caps lineHeight={2} textColor="headingColor">
            Going Serverless all the Way
          </Heading>
          <p>Christoph Wille</p>
        </Slide>


        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            CNCF - Cloud Native Computing Foundation
          </Heading>
          <List>
            <ListItem>Foster growth and evolution of ecosystem</ListItem>
            <ListItem>Promote underlying technologies</ListItem>
            <ListItem>Provide stewardship for projects</ListItem>
            <ListItem>Make technologies accessible and reliable</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Notes>
            <h4>Serverless Working Group Whitepaper</h4>
            <ul>
              <li>Describes &amp; defines Serverless</li>
              <li>Highlights promising use cases and areas where they've already proven value</li>
              <li>Differentiates Serverless from PaaS and Container Orchestration</li>
              <li>Describes the mechanics of a generic Serverless system</li>
              <li>Identifies potential future "harmonization" the WG could look at</li>
            </ul>
          </Notes>
          <Heading size={6} textColor="headingColor" caps>
            CNCF - Cloud Native Computing Foundation
          </Heading>
          <List>
            <ListItem>
              <a href="https://www.slideshare.net/leecalcote/cncf-state-of-serverless-project-nuclio">
                CNCF State of Serverless @Slideshare
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/cncf/wg-serverless/tree/master/whitepaper">CNCF Whitepaper V1</a>
            </ListItem>
          </List>
          <Layout>
            <Fill>
              <Image src={images.cncf_members.replace('/', '')} width="100%" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            CNCF - Landscape
          </Heading>
          <Layout>
            <Fill>
              <a href="https://raw.githubusercontent.com/cncf/landscape/master/landscape/CloudNativeLandscape_latest.png">
                <Image src={images.cncf_landscape.replace('/', '')} width="100%" />
              </a>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            CNCF - Serverless Landscape
          </Heading>
          <Layout>
            <Fill>
              <a href="https://raw.githubusercontent.com/cncf/landscape/master/serverless/CloudNativeLandscape_Serverless_latest.png">
                <Image src={images.cncf_landscape_serverless.replace('/', '')} width="100%" />
              </a>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Cloud Revenues 2017
          </Heading>

          <Image style="display: inline; vertical-align: top;" src={images.cloud_revenues_Q42017.replace('/', '')} width="45%" />
          <Image
            style="display: inline; margin-left: 10px; vertical-align: top;"
            src={images.cloud_revenues_2017.replace('/', '')}
            width="45%"
          />
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Market Share
          </Heading>
          <Image src={images.market_share_Q42017.replace('/', '')} width="100%" />
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Amazon AWS
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            <a href="https://aws.amazon.com/de/blogs/aws/now-available-aws-serverless-application-repository/">
              AWS Serverless Application Repository #1
            </a>
          </Heading>
          <List>
            <ListItem>
              <a href="https://aws.amazon.com/de/serverless/serverlessrepo/">Marketplace</a>
            </ListItem>
            <ListItem>Consumer</ListItem>
            <ListItem>Producer</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            <a href="https://aws.amazon.com/de/serverless/serverlessrepo/">AWS Serverless Application Repository #2</a>
          </Heading>
          <List>
            <ListItem>
              <a href="https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:339543757547:applications~WebScraper">
                WebScraper
              </a>
            </ListItem>
            <ListItem>
              <a href="https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:132093761664:applications~Contact-Us">
                Contact-Us
              </a>
            </ListItem>
            <ListItem>
              <a href="https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:077246666028:applications~image-processing-service">
                image-processing-service
              </a>
            </ListItem>
            <ListItem>
              <a href="https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:123940773876:applications~iot-twillio-bridge">
                iot-twillio-bridge
              </a>
            </ListItem>
            <ListItem>
              <a href="https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:123940773876:applications~iot-twitter-bridge">
                iot-twitter-bridge
              </a>
            </ListItem>
            <ListItem>
              <a href="https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:077246666028:applications~cloudwatch-alarm-to-slack">
                cloudwatch-alarm-to-slack
              </a>
            </ListItem>
            <ListItem>
              <a href="https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:233054207705:applications~serverless-todo">
                serverless-todo
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            AWS Evolution #1
          </Heading>
          <Image src={images.aws1.replace('/', '')} width="100%" />
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            AWS Evolution #2
          </Heading>
          <Image src={images.aws2.replace('/', '')} width="100%" />
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            AWS Evolution #3
          </Heading>
          <Image src={images.aws3.replace('/', '')} width="100%" />
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            AWS Evolution #4
          </Heading>
          <Image src={images.aws4.replace('/', '')} width="100%" />
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            AWS Updates
          </Heading>
          <List>
            <ListItem>
              <a href="https://aws.amazon.com/de/blogs/aws/new-encryption-at-rest-for-dynamodb/">
                Encryption at Rest for DynamoDB
              </a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/de/blogs/aws/now-open-third-aws-availability-zone-in-london/">
                Third AWS Availability Zone in London
              </a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/de/blogs/aws/now-open-aws-eu-paris-region/">AWS EU (Paris) Region</a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/de/blogs/aws/aws-cloud9-cloud-developer-environments/">
                AWS Cloud9 - Cloud Development Environment
              </a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/de/about-aws/whats-new/2018/02/introducing-the-aws-instance-scheduler/">
                AWS Instance Scheduler
              </a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/blogs/aws/introducing-amazon-appsync/">
                Introducing AWS AppSync – Build data-driven apps with real-time and off-line capabilities
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            AWS Updates
          </Heading>
          <List>
            <ListItem>
              <a href="https://aws.amazon.com/de/about-aws/whats-new/2018/01/aws-lambda-supports-go/">AWS Lambda supports Go</a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/de/about-aws/whats-new/2018/01/aws-lambda-supports-c-sharp-dot-net-core-2-0/">
                AWS Lambda supports C# (.Net Core)
              </a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/de/about-aws/whats-new/2018/01/introducing-aws-auto-scaling/?fc=p_2">
                AWS Auto Scaling
              </a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/about-aws/whats-new/2017/11/aws-lambda-doubles-maximum-memory-capacity-for-lambda-functions/?nc1=h_ls">
                AWS Lambda Doubles Maximum Memory Capacity for Lambda Functions
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.youtube.com/watch?v=GjznBQJfpHQ">
                AWS DevDays Nordics - Serverless: State of the union@Youtube
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Microsoft Azure
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Azure Updates
          </Heading>
          <List>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/luis-ai-automated-machine-learning-for-custom-language-understanding/">
                LUIS.AI: Automated Machine Learning for Custom Language Understanding
              </a>
            </ListItem>

            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/announcing-storage-service-encryption-with-customer-managed-keys-ga/">
                Announcing Storage Service Encryption with customer managed keys general availability
              </a>
            </ListItem>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/public-preview-of-java-on-app-service-built-in-support-for-tomcat-and-openjdk/">
                Public preview of Java on App Service, built-in support for Tomcat and OpenJDK
              </a>
            </ListItem>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/just-in-time-vm-access-is-generally-available/">
                Just-in-Time VM Access is generally available
              </a>
            </ListItem>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/announcing-new-milestones-for-microsoft-cognitive-services-vision-and-search-services-in-azure/">
                Announcing new milestones for Microsoft Cognitive Services vision and search services in Azure
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Azure Updates
          </Heading>
          <List>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/build-go-apps-for-azure-with-the-go-sdk-now-generally-available/">
                Build Go apps for Azure with the Go SDK, now generally available
              </a>
            </ListItem>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/azure-cosmosdb-graph-api-now-generally-available/">
                Azure #CosmosDB Graph API now generally available
              </a>
            </ListItem>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/announcing-the-general-availability-of-azure-event-grid/">
                Announcing the general availability of Azure Event Grid
              </a>
            </ListItem>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/bringing-hybrid-cloud-java-and-spring-apps-to-azure-and-azure-stack/">
                Bringing hybrid cloud Java and Spring apps to Azure and Azure Stack
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Google Cloud
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Google Cloud Updates
          </Heading>
          <List>
            <ListItem>
              <a href="https://firebase.googleblog.com/2018/02/firebase-cloud-messaging-v1-now.html">
                Firebase Cloud Messaging v1 Now Available from the Admin SDK
              </a>
            </ListItem>
            <ListItem>
              <a href="https://firebase.googleblog.com/2018/01/introducing-query-based-security-rules.html">
                Introducing Query-based Security Rules
              </a>
            </ListItem>
            <ListItem>
              <a href="https://firebase.googleblog.com/2017/10/introducing-cloud-firestore.html">
                Introducing Cloud Firestore: Our New Document Database for Apps
              </a>
            </ListItem>
            <ListItem>
              <a href="https://cloud.google.com/automl/">
                CLOUD AUTOML - Train high quality custom machine learning models with minimum effort and machine learning
                expertise
              </a>
            </ListItem>
            <ListItem>
              <a href="https://cloud.google.com/iot-core/">
                CLOUD IOT CORE - A fully managed service to easily and securely connect, manage, and ingest data from globally
                dispersed devices
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Others
          </Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Others Updates
          </Heading>
          <List>
            <ListItem>
              <a href="https://techcrunch.com/2018/02/06/alibaba-cloud-growing-like-gangbusters-but-still-far-behind-aws-and-other-market-leaders/">
                Alibaba Cloud growing like gangbusters, but still far behind AWS and other market leaders
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.cloudfoundry.org/blog/introducing-templates-for-ibm-cloud-functions/">
                Introducing Templates for IBM Cloud Functions
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.ibm.com/blogs/bluemix/2018/02/introducing-functions-templates/">
                IBM Cloud Function Templates - From new account to running code in 5 minutes with serverless Templates
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Articles
          </Heading>
          <List>
            <ListItem>
              <a href="https://www.bloomberg.com/news/articles/2018-03-07/amazon-oracle-microsoft-jockey-for-pentagon-s-cloud-business">
                Pentagon Goes Winner-Take-All for Cloud Award Worth Billions
              </a>
            </ListItem>
            <ListItem>
              <a href="https://blog.thousandeyes.com/amazon-aws-outage-lesson-managing-cloud-first-risks/">
                A power outage hit the AWS-East Region (Ashburn). Significant corporate websites and Amazon’s own service
                offerings were impacted as well.
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Articles
          </Heading>
          <List>
            <ListItem>
              <a href="https://read.acloud.guru/comparing-aws-lambda-performance-of-node-js-python-java-c-and-go-29c1163c2581">
                Comparing AWS Lambda performance of Node.js, Python, Java, C# and Go
              </a>
            </ListItem>
            <ListItem>
              <a href="http://baus.net/going-serverless">Going serverless: Converting Yield.IO to AWS and Lambda</a>
            </ListItem>
            <ListItem>
              <a href="https://fnproject.io/">Open-source container-native serverless platform that you can run anywhere</a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Articles
          </Heading>
          <List>
            <ListItem>
              <a href="https://slappforge.com/">
                SLAppForge brings serverless computing and applications into mainstream use for the business success of end users.
              </a>
            </ListItem>
            <ListItem>
              <a href="https://thenewstack.io/coder-accountant-serverless-systems-design-based-costing-models/">
                Coder-as-Accountant: Serverless System Design Is Being Based on Costing Models
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Articles
          </Heading>
          <List>
            <ListItem>
              <a href="https://www.stackery.io/blog/how-an-under-provisioned-rds-postgres-db-10Xd-our-aws-lambda-costs/">
                How an under-provisioned database 10X'd our AWS Lambda costs
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.cnbc.com/2018/02/01/google-cloud-revenue-passes-1-billion-per-quarter.html">
                Google says its cloud now brings in $1 billion per quarter
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.cnbc.com/2018/02/01/aws-earnings-q4-2017.html">
                Amazon cloud revenue jumps 45 percent in fourth quarter
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Articles
          </Heading>
          <List>
            <ListItem>
              <a href="https://www.forbes.com/sites/bobevans1/2018/02/05/why-microsoft-is-ruling-the-cloud-ibm-is-matching-amazon-and-google-is-15-billion-behind/#6c1775681dc1">
                Why Microsoft Is Ruling The Cloud, IBM Is Matching Amazon, And Google Is $15 Billion Behind
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.puresec.io/blog/serverless-top-10-released">
                The First "Serverless Architectures Security Top 10" Guide Released
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Blogs
          </Heading>
          <List>
            <ListItem>
              <a href="https://read.acloud.guru/">A cloud guru blog</a>
            </ListItem>
            <ListItem>
              <a href="https://serverless.com/blog/">A cloud guru serverless blog</a>
            </ListItem>
            <ListItem>
              <a href="https://serverless.email/issues">Serverless Mail - Issues Archive</a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/de/about-aws/whats-new/2018/">AWS 2018 News</a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/de/blogs/aws/">AWS News Blog</a>
            </ListItem>
            <ListItem>
              <a href="https://aws.amazon.com/de/new/">AWS News</a>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Blogs
          </Heading>
          <List>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/blog/">Azure Blog</a>
            </ListItem>
            <ListItem>
              <a href="https://cloudplatform.googleblog.com/">Google Cloud Platform Blog</a>
            </ListItem>
            <ListItem>
              <a href="https://firebase.googleblog.com/">Google Firebase Blog</a>
            </ListItem>
            <ListItem>
              <a href="https://www.alibabacloud.com/blog">Alibaba Blog</a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Blogs
          </Heading>
          <List>
            <ListItem>
              <a href="https://www.ibm.com/blogs/bluemix/">IBM Cloud Blog</a>
            </ListItem>
            <ListItem>
              <a href="https://www.ibm.com/blogs/cloud-announcements/">IBM Cloud News and Product Announcements</a>
            </ListItem>
            <ListItem>
              <a href="https://www.ibm.com/blogs/cloud-computing/">IBM Thoughts on cloud</a>
            </ListItem>
            <ListItem>
              <a href="https://info.acloud.guru/faas-and-furious">Comic by A.Cloud.guru</a>
            </ListItem>
            <ListItem>
              <a href="https://www.trek10.com/blog/">
                Trek10 Blog - How we architect, build, and manage world class AWS infrastructure
              </a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Twitter
          </Heading>
          <List>
            <ListItem>
              <a href="https://twitter.com/awscloud">@AWSCloud</a>
            </ListItem>
            <ListItem>
              <a href="https://twitter.com/MSCloud">@MSCloud</a>
            </ListItem>
            <ListItem>
              <a href="https://twitter.com/googlecloud">@GoogleCloud</a>
            </ListItem>
            <ListItem>
              <a href="https://twitter.com/firebase">@Firebase</a>
            </ListItem>
            <ListItem>
              <a href="https://twitter.com/IBMCloud">@IBMCloud</a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="headingColor" caps>
            Status Pages
          </Heading>
          <List>
            <ListItem>
              <a href="https://status.aws.amazon.com/">AWS Service Health Dashboard</a>
            </ListItem>
            <ListItem>
              <a href="https://azure.microsoft.com/en-us/status/">Azure status</a>
            </ListItem>
            <ListItem>
              <a href="https://status.cloud.google.com/">Google Cloud Status Dashboard</a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={2} fit caps textColor="black">
            Thank you
          </Heading>
          <Heading size={1} textColor="textColor">
            Discussion
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
